<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\BuyerController;
use App\Http\Controllers\SingleProduct;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/


Route::middleware('auth:sanctum')->group(function (){
  Route::get('/user',[AuthController::class, 'user']);
});
Route::post('/product/create',[ProductController::class, 'create']);
Route::post('/product/update',[ProductController::class, 'update']);
Route::post('/product/delete/{id}',[ProductController::class, 'destroy']);
Route::get('/products',[ProductController::class, 'index']);
Route::get('/feature/products',[ProductController::class, 'featureProduct']);
Route::get('/single-product-get/{id}', [SingleProduct::class, 'singleProduct']);
Route::middleware('auth:sanctum')->group(function () {
  // Your protected routes for buyers
  Route::get('/hello',[BuyerController::class, 'hello']);
  Route::get('/add-to-cart/{id}',[BuyerController::class, 'addToCart']);
  Route::get('/cart-data',[BuyerController::class, 'sentCartData']);
 
});
Route::post('/login',[BuyerController::class, 'login']);//->middleware('auth:sanctum','abilities:check-status,place-orders');

Route::post('/signup',[BuyerController::class, 'signup']);
Route::get('/attach',[BuyerController::class, 'store']);


