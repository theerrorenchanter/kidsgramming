<?php

namespace Database\Factories;

use App\Models\Course;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Course>
 */
class CourseFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'title' => fake()->sentence(5),
            'description' => fake()->text(90),
            'cover_image' => 'https://picsum.photos/200/300',
            'premium' => fake()->randomElement([0, 1]),
            'professor' => User::where('username', 'professortest')->first()->id
        ];
    }
}
