<?php

namespace Database\Seeders;

use App\Models\Course;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class CoursesSeeder extends Seeder
{

    public function run()
    {
        Course::factory()->times(16)->create();
    }
}