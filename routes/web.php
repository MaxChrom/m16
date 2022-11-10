<?php

use App\Http\Controllers\MissionController;
use App\Http\Controllers\PeopleController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('index');
});

Route::get('/people-of-interest', [PeopleController::class, 'index']);
Route::get('/people-of-interest/api', [PeopleController::class, 'api']);
Route::get('/people-of-interest/{id}', [PeopleController::class, 'show'])->name('person');
Route::get('/mission/{id}', [MissionController::class, 'show']);
Route::view('/missions/{path?}', 'missions/app')->where('path', '.*')->name('missions.app');
