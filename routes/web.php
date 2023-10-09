<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Controller;
use App\Http\Controllers\SingleProduct;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', [LoginController::class, 'loginOrNot']);
Route::get('/name', [Controller::class, 'name']);

Auth::routes();

Route::get('/{any?}', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::get('/single-product/{id}', [App\Http\Controllers\HomeController::class, 'index']);
Route::get('/product/add', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::get('/hello', [HomeController::class, 'hello']);
Route::get('/single-product-get/{id}', [SingleProduct::class, 'singleProduct']);