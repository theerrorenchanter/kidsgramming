<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class AdminUserSeeder extends Seeder
{

    public function run()
    {
        $user = User::create([
            'name' => 'ADMIN TEST',
            'username' => 'admintest',
            'email' => 'admin@test.com',
            'sponsor' => null,
            'password' => Hash::make('admintest')
        ]);

        $user->assignRole('super-admin');
    }
}