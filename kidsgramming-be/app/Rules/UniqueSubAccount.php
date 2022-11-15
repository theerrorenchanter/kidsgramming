<?php

namespace App\Rules;

use App\Models\User;
use Illuminate\Contracts\Validation\InvokableRule;

class UniqueSubAccount implements InvokableRule
{

    /**
     * Run the validation rule.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @param  \Closure(string): \Illuminate\Translation\PotentiallyTranslatedString  $fail
     * @return void
     */
    public function __invoke($attribute, $value, $fail)
    {
        if (auth()->user()) {
            $result = User::where('username', $value)
                        ->where('sponsor', auth()->user()->username)
                        ->exists();

            if ($result) {
                $fail('The :attribute is already used.');
            }
        }
    }
}
