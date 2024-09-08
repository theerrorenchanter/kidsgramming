<?php

namespace Database\Seeders;

use App\Models\Suscription;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class SponsorUserSeeder extends Seeder
{

    public function run()
    {
        $freeUser = User::create([
            'name' => 'FREE SPONSOR TEST',
            'username' => 'freesponsortest',
            'email' => 'freesponsor@test.com',
            'sponsor' => null,
            'suscription' => 'free',
            'created_accounts' => 0,
            'password' => Hash::make('freesponsortest')
        ]);

        $freeUser->assignRole('free-user-owner');

        $premiumUser = User::create([
            'name' => 'PREMIUM SPONSOR TEST',
            'username' => 'premiumsponsortest',
            'email' => 'premiumsponsor@test.com',
            'sponsor' => null,
            'suscription' => 'premium',
            'created_accounts' => 0,
            'password' => Hash::make('premiumsponsortest')
        ]);

        $premiumUser->assignRole('premium-user-owner');
    }
}