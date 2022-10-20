<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Http\Requests\LoginUserRequest;
use App\Http\Requests\RegisterUserRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;

class AuthController extends Controller
{

    public function registerUser(RegisterUserRequest $request)
    {

        $user = User::create([
            'name' => $request->name,
            'username' => $request->username,
            'email' => $request->email,
            'user_sponsor' => $request->user_sponsor,
            'password' => Hash::make($request->password)
        ]);

        $user->assignRole('free-user-owner');

        return response([
            'message' => 'User created',
            'user' => $user,
            'auth_token' => $user->createToken('auth_token')->plainTextToken
        ]);
    }

    public function loginUser(LoginUserRequest $request)
    {
        if (Auth::attempt($request->only('user_sponsor', 'username', 'password')))
        {
            return response([
                'message' => 'Invalid credentials'
            ], 401);
        }

        $user = User::where([
            ['user_sponsor', '=', $request->sponsor],
            ['username', '=', $request->username],
        ])->first();

        return response([
            'message' => 'User logged',
            'user' => $user,
            'auth_token' => $user->createToken('auth_token')->plainTextToken
        ]);
    }

    public function logoutUser(Request $request)
    {
        $request->user()->currentAccesToken()->delete();

        return response([
            'message' => 'Logged out'
        ]);
    }

}