<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class ProfessorUserSeeder extends Seeder
{

    public function run()
    {
        $user = User::create([
            'name' => 'PROFESSOR TEST',
            'username' => 'professortest',
            'email' => 'professor@test.com',
            'password' => Hash::make('professortest')
        ]);

        $user->assignRole('user-professor');
    }
}