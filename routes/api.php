<?php

use App\Http\Controllers\Api\MissionController;
use App\Http\Controllers\Api\StatusController;
use App\Http\Controllers\PeopleController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::get('/statuses', [StatusController::class, 'index']);
Route::get('/mission/{id}', [MissionController::class, 'find']);
Route::post('/mission/store', [MissionController::class, 'store']);
Route::get('/sendTestEmail', [PeopleController::class, 'sendTestEmail']);
Route::get('/sendNotification', [PeopleController::class, 'sendTestNotification']);


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
