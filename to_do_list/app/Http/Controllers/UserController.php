<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function show(Request $request)
    {
        return response()->json([
            'message' => 'User show successfully',
            'data' => $request->user()
        ], 200);
    }

    public function update(Request $request)
    {
        $user = $request->user();

        $validated = $request->validate([
            'name' => 'sometimes|string|max:255',
            'email' => 'sometimes|email|max:255|unique:users,email,' . $user->id,
        ]);

        $user->update($validated);
        $user->save();

        return response()->json([
            'message' => 'User updated successfully',
            'data' => $user->fresh()
        ], 200);
    }

    public function updatePassword(Request $request)
    {
        $user = $request->user();

        $validated = $request->validate([
            'current_password' => 'required|string|min:8',
            'new_password' => 'required|string|min:8|confirmed',
        ]);

        if (!Hash::check($validated['current_password'], $user->password)) {
            return response()->json([
                'message' => 'Current password is incorrect',
            ], 400);
        }

        $user->update([
            'password' => Hash::make($validated['new_password'])
        ]);

        return response()->json([
            'message' => 'Password updated successfully',
            'data' => $user
        ], 200);
    }

    public function destroy(Request $request)
    {
        $user = $request->user();
        $token = $user->currentAccessToken();

        $token->delete();
        $user->delete();

        return response()->json([
            'message' => 'Account deleted successfully',
            'data' => $user
        ], 200);
    }
}
