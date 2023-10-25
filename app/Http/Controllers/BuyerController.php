<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Models\Buyer;
use App\Http\Requests\StoreBuyerRequest;
use App\Http\Requests\UpdateBuyerRequest;
use App\Models\Order;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use App\Models\Product;

class BuyerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(StoreBuyerRequest $request)
    {
        $data = $request->validated();
        $data['password'] = Hash::make($data["password"]);
        $buyer = Buyer::create($data);
        return response(json_encode($data));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }
    public function login(LoginRequest $request)
    {
        // Use validated data from the request
        $credentials = $request->validated();

        // Retrieve the 'remember' value and remove it from the credentials
        $remember = $credentials['remember'] ?? false;
        unset($credentials['remember']);
        //return 'hello';
        // Attempt authentication
        if (!Auth::guard('buyer')->attempt($credentials)) {
            // Authentication failed
            return response([
                'error' => 'The provided credentials are not correct'
            ], 422);
        }
        $buyer = Auth::guard('buyer')->user();
        $token = $buyer->createToken('MyApp', ['buyer'])->plainTextToken;
        return response([
            'token' => $token,
            'user' => $buyer
        ]);

        // Authentication was successful


        // Create a token and return it in the response



    }

    public function signup(StoreBuyerRequest $request)
    {
        $data = $request->validated();
        $data['password'] = Hash::make($data["password"]);
        $buyer = Buyer::create($data);
        $token = $buyer->createToken('Buyer Token')->plainTextToken;


        return response([
            'user' => $buyer,
            'token' => $token
        ]);
    }
    public function hello()
    {
        if (auth()->check()) {
            // User is authenticated, you can perform actions for authenticated users.
            // For example, you can access the authenticated user's information using auth()->user().
            $user = auth()->user();
            return response($user);
            // ...
        } else {
            // User is not authenticated, you can handle the case for unauthenticated users.
            // ...
        }
    }
    /**
     * Store a newly created resource in storage.
     */
    public function addToCart($id)
    {
        $buyerId = Auth::user()->id;
        $productId = intval($id);
        $buyer = Buyer::find($buyerId);
        $dataProduct = $buyer->orders()->sync($productId);
        $data = $buyer->orders;
        return response(json_encode($data));
    }
    // sent cart data function   
    public function sentCartData()
    {
        $buyerId = Auth::user()->id;
        $buyer = Buyer::find($buyerId);
        $orders = $buyer->orders;
        $data = $orders->load('prices');
        return response(json_encode($data));
    }
    public function store(Request $request, Buyer $buyer)
    {
        // $buyer = Buyer::find(3);
        // $data = $buyer->orders;
        // $product = Product::find($data[0]->product_id);
        // return response(json_encode($product));
    }

    /**
     * Display the specified resource.
     */
    public function show(Buyer $buyer)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Buyer $buyer)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateBuyerRequest $request, Buyer $buyer)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Buyer $buyer)
    {
        //
    }
}
