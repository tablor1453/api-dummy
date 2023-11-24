<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::truncate();
        User::create([
            'name' => env('USEROOT_NAME'),
            'username' => env('USEROOT_USERNAME'),
            'email' => env('USEROOT_EMAIL'),
            'password' => Hash::make(env('USEROOT_PASSWORD')),
        ]);
    }
}
