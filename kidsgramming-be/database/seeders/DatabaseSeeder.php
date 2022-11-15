<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Queue\Jobs\DatabaseJob;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(RolesPermissionsSeeder::class);
        $this->call(SuscriptionsSeeder::class);
        $this->call(AdminUserSeeder::class);
        $this->call(SponsorUserSeeder::class);
    }
}