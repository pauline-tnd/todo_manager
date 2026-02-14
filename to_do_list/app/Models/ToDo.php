<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ToDo extends Model
{
    use HasFactory;

    protected $table = 'todos'; // default table = model + 's' -> todos
    protected $primaryKey = 'id'; // default primary key = id

    protected $fillable = [
        'title',
        'description',
        'status',
        'category',
        'due_date',
        'user_id',
    ];

    protected $casts = [
        'status' => 'string',
        'due_date' => 'datetime',
        'is_deleted' => 'boolean'
    ];

    protected function user()
    {
        // class, foreign key, primary key
        return $this->belongsTo(User::class, 'user_id', 'id');
    }

    // ----- test -----
    // php artisan tinker

    // use App\Models\ToDo;

    // $todo = ToDo::create([
    //     'title' => 'Tes Task',
    //     'description' => 'Cek koneksi supabase',
    //     'status' => 'on progress',
    //     'category' => 'test',
    //     'due_date' => now()->addDay(),
    //     'user_id' => $user->id,
    // ]);

    // $todo;
}
