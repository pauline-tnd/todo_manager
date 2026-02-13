<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\ToDo;

class ToDoController extends Controller
{
    public function index()
    {
        $user_id = Auth::user()->id;
        $todos = ToDo::where('user_id', $user_id)->get();
        return response()->json([
            'data' => $todos
        ], 200);
    }

    public function show($id){
        $user_id = Auth::user()->id;
        $todo = ToDo::where('user_id', $user_id)->find($id);
        
        if(!$todo){
            return response()->json([
                'message' => 'Todo not found'
            ], 404);
        }

        return response()->json([
            'data' => $todo
        ], 200);
    }

    public function store(Request $request){
        $user_id = Auth::user()->id;
        // return response()->json([
        //     'user id : ' => Auth::user()->id
        // ]);

        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string|max:255',
            'category' => 'nullable|string|max:255',
            'due_date' => 'nullable|dateTime|after_or_equal:today',
        ]);

        $validated['user_id'] = $user_id;
        $validated['status'] = 'on progress';
        // $validated['due_date'] = Carbon::parse($request->due_date);

        $todo = ToDo::create($validated);
        $todo->save();

        return response()->json([
            'data' => $todo
        ], 200);
    }

    public function update(Request $request, $id){
        $user_id = Auth::user()->id;
        $todo = ToDo::where('user_id', $user_id)->find($id);
        
        if(!$todo){
            return response()->json([
                'message' => 'Todo not found'
            ], 404);
        }

        $validated = $request->validate([
            'title' => 'sometimes|string|max:255',
            'description' => 'sometimes|string|max:255',
            'category' => 'sometimes|string|max:255',
            'due_date' => 'sometimes|dateTime|after_or_equal:today',
            'status' => 'sometimes|in:on progress,late,done',
        ]);
        $todo->update($validated);
        $todo->save();

        return response()->json([
            'data' => $todo->fresh()
        ], 200);
    }

    public function destroy($id){
        $user_id = Auth::user()->id;
        $todo = ToDo::where('user_id', $user_id)->find($id);
        
        if(!$todo){
            return response()->json([
                'message' => 'Todo not found'
            ], 404);
        }

        $todo->delete();
        return response()->json([
            'message' => 'Todo deleted successfully'
        ], 200);
    }
}
