<?php

use Illuminate\Http\Request;
use App\Equipment;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/equipment', function (Request $request) {
    return Response::json(Equipment::all(), 200, array(), JSON_PRETTY_PRINT);
});

Route::get('/equipment/{id}', function ($id) {
    return Response::json(Equipment::findOrFail($id), 200, array(), JSON_PRETTY_PRINT);
});
