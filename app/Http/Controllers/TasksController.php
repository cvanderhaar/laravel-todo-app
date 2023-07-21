<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TasksController extends Controller
{
    public function index()
{
    return Task::all();
}

public function store(Request $request)
{
    $task = Task::create($request->all());
    return response()->json($task, 201);
}

public function destroy(Task $task)
{
    $task->delete();
    return response()->json(null, 204);
}
}
