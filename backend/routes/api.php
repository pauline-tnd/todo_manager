<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ToDoController;
use App\Http\Controllers\AuthController;

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::middleware('auth:sanctum')->post('/logout', [AuthController::class, 'logout']);

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', [UserController::class, 'show']);
    Route::put('/user/update/{id}', [UserController::class, 'update']);
    Route::put('/user/update-password/{id}', [UserController::class, 'updatePassword']);
    Route::delete('/user/delete', [UserController::class, 'destroy']);
    
    Route::get('/todo', [ToDoController::class, 'index']);
    Route::get('/todo/{id}', [ToDoController::class, 'show']);
    Route::post('/todo/create', [ToDoController::class, 'store']);
    Route::put('/todo/update/{id}', [ToDoController::class, 'update']);
    Route::delete('/todo/delete/{id}', [ToDoController::class, 'destroy']);
});
