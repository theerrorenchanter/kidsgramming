<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreateCourseRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return $this->user->hasRole('user-professor');
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'title' => ['string', 'max:100', 'required', 'unique:courses'],
            'description' => ['string', 'required'],
            'available' => ['boolean', 'required'],
            'premium' => ['boolean', 'required'],
            'cover_image' => ['string', 'nullable'],
            'user_professor' => ['numeric', 'exists:users,id']
        ];
    }
}
