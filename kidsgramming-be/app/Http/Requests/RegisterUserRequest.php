<?php

namespace App\Http\Requests;

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
            'username' => ['required'],
            'email' => ['nullable', 'email', 'unique:users,email'],
            'sponsor' => ['nullable', 'exists:users,username'],
            'password' => ['required']
        ];
    }
}