<?php

namespace App\Http\Requests;

use App\Rules\UniqueSubAccount;
use Illuminate\Foundation\Http\FormRequest;

class RegisterUserRequest extends FormRequest
{

    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'name' => ['required'],
            'username' => ['required', new UniqueSubAccount],
            'email' => ['nullable', 'email', 'unique:users,email'],
            'sponsor' => ['nullable', 'exists:users,username'],
            'password' => ['required']
        ];
    }
}