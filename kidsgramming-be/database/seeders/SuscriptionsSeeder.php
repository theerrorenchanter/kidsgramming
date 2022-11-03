<?php

namespace Database\Seeders;

use App\Models\Suscription;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
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
            'price' => 2000
        ]);

        Suscription::create([
            'name' => 'free',
            'price' => 0
        ]);
    }
}
