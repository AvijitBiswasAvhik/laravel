<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\BuyerController;
use App\Http\Controllers\SingleProduct;
use App\Http\Controllers\BkashPayment;

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


Route::middleware('auth:sanctum')->group(function () {
  Route::get('/user', [AuthController::class, 'user']);
  Route::get('/resend-mail', [BuyerController::class, 'CreateEmailVerifiy']);
  Route::get('/create-payment', [BkashPayment::class, 'createPayment']);
  Route::get('/gran-token/{price}', [BkashPayment::class, 'granToken']);
  Route::get('/login-or-not', [AuthController::class, 'loginOrNot']);
});
Route::get('/execute-payment', [BkashPayment::class, 'executePayment']);


Route::get('/verify-email/{id}/{token}', [HomeController::class, 'verifyEmail']);



Route::post('/product/create', [ProductController::class, 'create']);
Route::post('/product/update', [ProductController::class, 'update']);
Route::post('/product/delete/{id}', [ProductController::class, 'destroy']);
Route::get('/products', [ProductController::class, 'index']);
Route::get('/feature/products/{type}', [ProductController::class, 'featureProduct']);
Route::get('/feature/products', [ProductController::class, 'featureProduct']);
Route::get('/single-product-get/{id}', [SingleProduct::class, 'singleProduct']);
Route::get('/refund/request', [BkashPayment::class, 'refundRequest']);
Route::post('/refund/request/accept', [BkashPayment::class, 'refundAccept']);

Route::middleware(['auth:sanctum', 'EmailVerify'])->group(function () {
  // Your protected routes for buyers
  Route::get('/hello', [BuyerController::class, 'hello']);
  Route::get('/add-to-cart/{id}', [BuyerController::class, 'addToCart']);
  Route::get('/cart-data', [BuyerController::class, 'sentCartData']);
  Route::post('/order/add-qty/{id}', [BuyerController::class, 'addQty']);
  Route::get('/order/total-price', [BuyerController::class, 'totalPrice']);
  Route::get('/order/cart-item-delete/{id}', [BuyerController::class, 'deleteCartItem']);
  Route::post('/order/refund', [BkashPayment::class, 'refund']);
  Route::get('/orders', [HomeController::class, 'orders']);
});
Route::post('/login', [BuyerController::class, 'login']); //->middleware('auth:sanctum','abilities:check-status,place-orders');

Route::post('/signup', [BuyerController::class, 'signup']);
Route::get('/attach', [BuyerController::class, 'store']);

