<?php

namespace App\Http\Controllers;

use App\Http\Requests\RegisterUserRequest;
use App\Models\Suscription;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;

class RegisterStudentController extends Controller
{
    public function registerStudent(RegisterUserRequest $request)
    {

        if (!$request->user()->hasAnyRole(['free-user-owner', 'premium-user-owner']))
        {
            return response([
                'message' => 'Authorization required'
            ], 401);
        }

        $suscription = Suscription::where('name', $request->user()->suscription)->first();
        $available = $suscription->capacity - $request->user()->created_accounts;
        if ($available <= 0) {
            return response([
                'message' => 'There is no more capacity to create students'
            ], 406);
        }

        $user = User::create([
            'name' => $request->name,
            'username' => $request->username,
            'sponsor' => $request->user()->username,
            'password' => Hash::make($request->password)
        ]);

        $request->user()->hasRole('free-user-owner')
            ? $user->assignRole('free-user-student')
            : $user->assignRole('premium-user-student');

        $request->user()->created_accounts = $request->user()->created_accounts + 1;
        $request->user()->save();

        return response([
            'message' => 'Student created',
            'student' => $user
        ]);
    }
}
