<?php

namespace Database\Seeders;

use App\Models\Suscription;
use Illuminate\Database\Seeder;

class SuscriptionsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Suscription::create([
            'name' => 'premium',
            'capacity' => 5,
            'price' => 2000,
            'benefits' => [
                'Manage 5 students accounts',
                'Access to all the free and premium features'
            ]
        ]);

        Suscription::create([
            'name' => 'premium',
            'capacity' => 10,
            'price' => 3500,
            'benefits' => [
                'Manage 10 students accounts',
                'Access to all the free and premium features'
            ]
        ]);

        Suscription::create([
            'name' => 'premium',
            'capacity' => 20,
            'price' => 6500,
            'benefits' => [
                'Manage 20 students accounts',
                'Access to all the free and premium features'
            ]
        ]);

        Suscription::create([
            'name' => 'premium-plus',
            'price' => 1000,
            'benefits' => [
                'Manage unlimited students accounts',
                'Access to all the free and premium features'
            ]
        ]);

        Suscription::create([
            'name' => 'free',
            'capacity' => 2,
            'price' => 0,
            'benefits' => [
                'Manage 2 students accounts',
                'Access to all the free features'
            ]
        ]);
    }
}
