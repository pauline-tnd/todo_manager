<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, Notifiable, HasApiTokens;


    protected $table = 'users';
    protected $primaryKey = 'id';
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    protected function todos()
    {
        return $this->hasMany(ToDo::class);
    }

    // ----------- test -----------
    // php artisan tinker

    // use App\Models\User;

    // $user = User::create([
    // 'name' => 'user1',
    // 'email' => 'user1@gmail.com',
    // 'password' => bcrypt('123'),
    // ]);

    // $user->id;

}
