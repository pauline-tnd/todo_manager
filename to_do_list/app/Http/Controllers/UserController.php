<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{
    public function show(Request $request){
        return response()->json([
            'message' => 'success',
            'data' => $request->user()
        ], 200);
    }

    public function update(Request $request){
        $user = $request->user();
        $user->update($request->all());
        return response()->json([
            'message' => 'success',
            'data' => $user
        ], 200);
    }
    
}
