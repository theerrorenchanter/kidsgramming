<?php

namespace App\Http\Controllers;

use App\Http\Requests\RegisterUserRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class RegisterProfessorController extends Controller
{
    public function registerProfessor(RegisterUserRequest $request)
    {

        if (!$request->user()->hasRole('super-admin'))
        {
            return response([
                'message' => 'Authorization required'
            ], 401);
        }

        $user = User::create([
            'name' => $request->name,
            'username' => $request->username,
            'email' => $request->email,
            'password' => Hash::make($request->password)
        ]);

        $user->assignRole('user-professor');

        return response([
            'message' => 'Professor created',
            'professor' => $user
        ]);
    }
}
