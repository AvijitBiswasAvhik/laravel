<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Controller;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\SingleProduct;
use Illuminate\Foundation\Auth\EmailVerificationRequest;
use Illuminate\Http\Request;
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
// Enable email verification routes
Auth::routes(['verify' => true]);


Route::middleware(['auth', 'verified'])->group(function () {
    // Your routes for authenticated and verified users here
    Route::get('/{any?}', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::get('/single-product/{id}', [App\Http\Controllers\HomeController::class, 'index']);
Route::get('/single-product/{id}/edit', [HomeController::class, 'index']);
Route::get('/product/add', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::get('/hello', [HomeController::class, 'hello']);
Route::get('/single-product-get/{id}', [SingleProduct::class, 'singleProduct']);
});

Route::get('/email/verify', function () {
    return view('auth.verify');
})->middleware('auth')->name('verification.notice');
 
Route::get('/email/verify/{id}/{hash}', function (EmailVerificationRequest $request) {
    $request->fulfill();
 
    return redirect('/home');
})->middleware(['auth', 'signed'])->name('verification.verify');


 
Route::post('/email/verification-notification', function (Request $request) {
    $request->user()->sendEmailVerificationNotification();
 
    return back()->with('message', 'Verification link sent!');
})->middleware(['auth', 'throttle:6,1'])->name('verification.send');

