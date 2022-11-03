<?php

namespace App\Http\Controllers;

use App\Http\Requests\RegisterUserRequest;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class RegisterStudentController extends Controller
{
    public function registerStudent(RegisterUserRequest $request)
    {

        if (!$request->user->hasAnyRole(['free-user-owner', 'premium-user-owner']))
        {
            return response([
                'message' => 'Authorization required'
            ], 401);
        }

        $user = User::create([
            'name' => $request->name,
            'username' => $request->username,
            'sponsor' => $request->user->username,
            'password' => Hash::make($request->password)
        ]);

        $request->user->hasRole('free-user-owner')
            ? $user->assignRole('free-user-student')
            : $user->assignRole('premium-user-student');

        return response([
            'message' => 'Student created',
            'student' => $user
        ]);
    }
}
