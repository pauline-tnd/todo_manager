<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('todos', function (Blueprint $table) {
            $table->increments('id');
            $table->foreignId('user_id')
                    ->constrained()
                    ->onDelete('cascade')
                    ->onUpdate('cascade');

            $table->string('title')->nullable();
            $table->text('description')->nullable();
            $table->enum('status', ['on progress', 'late', 'done'])->default('on progress');
            $table->string('category')->nullable();

            $table->dateTime('due_date')->nullable();
            $table->boolean('is_deleted')->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('todos');
    }
};
