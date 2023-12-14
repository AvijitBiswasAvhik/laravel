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
use Illuminate\Http\Request as ApiRequest;
use Illuminate\Support\Facades\DB;
use App\Models\TotalPrice;
use Illuminate\Support\Facades\Notification;
use App\Notifications\CustomVerifyEmail;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\URL;

use function PHPUnit\Framework\returnSelf;

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
        $senMail = $this->CreateEmailVerifiy($buyer);
        //return response()->json(['msg'=>$buyer]);
        return response([
            'user' => $buyer,
            'token' => $token
        ]);
    }

    public function CreateEmailVerifiy($buyer = null)
    {
        if($buyer == null){
            $userData = auth()->user();
            $buyer = Buyer::find($userData['id']);
            //return response()->json(['msg'=>$buyer]);
        }
        $random = Str::random(40);
        $domain = URl::to('/');


        $url = $domain . '/api/verify-email/' . $buyer['id'] . '/' . $random;

        $buyer->title = 'Verify Youre Email';
        $buyer->body = 'Please Click here to verify your email';
        $buyer->url = $url;
        //$buyer->notify( new CustomVerifyEmail($buyer->name));

        Mail::send('EmailVerify', ['data' => $buyer], function ($message) use ($buyer) {
            $message->to($buyer->email)->subject($buyer['title']);
        });
        if ($buyer) {
            $buyer =  Buyer::find($buyer['id']);
            $buyer['remember_token'] = $random;
            $buyer->update();
            return $buyer;
        }
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

        $orders = $buyer->products;
        $data = $orders->load('prices');
        $exists = $exists = Order::where('product_id', $productId)->exists();
        if (!$exists) {
            $dataProduct = $buyer->products()->attach($productId);
        }
        return response(json_encode($data));
    }
    // sent cart data function   
    public function sentCartData($total = false)
    {
        $buyerId = Auth::user()->id;
        $buyer = Buyer::find($buyerId);
        $orders = $buyer->products;
        $data = $orders->load('prices');
        //$qty = $data[0]->pivot->qty;
        $arr = [];
        $quantity = [];
        foreach ($data as $key => $val) {
            $qty = $data[$key]->pivot->qty;
            $totalPrice = $data[$key]->prices->discount_price;
            $data[$key]->prices->totalPrice = $totalPrice * $qty;
            array_push($arr, $totalPrice * $qty);
            array_push($quantity, $qty);
        }
        if ($total === true) {
            $totalPrice = array_reduce($arr, function ($carry, $current) {

                return $carry + $current;
            });
            $qu = array_reduce($quantity, function ($carry, $current) {

                return $carry + $current;
            });
            $totalData = [
                'total_price' => $totalPrice,
                'total_product' => $qu,
            ];
            return $totalData;
        }
        return response(json_encode($data));
    }
    public function addQty(ApiRequest $request)
    {
        $data = $request->validate([
            'id' => 'required|integer',
            'value' => 'required|integer|max:20',
            'buyer' => 'required|integer',
            'order' => 'required|integer',
        ]);

        if (Auth::user()->id == $data['buyer']) {
            DB::table('orders')
                ->where('id', $data['order'])
                ->where('buyer_id', $data['buyer'])
                ->update(['qty' => $data['value']]);
            //$totalPrice = TotalPrice::
            return $this->sentCartData(null);
        }
    }

    public function totalPrice()
    {
        $totalPrice = $this->sentCartData(true);
        $totalPrice['buyer_id'] = Auth::user()->id;
        $total = TotalPrice::where('buyer_id', Auth::user()->id)->first();

        if ($total) {
            $total->update($totalPrice);
        } else {
            TotalPrice::create($totalPrice);
        }
        return $total;
    }
    public function store(Request $request, Buyer $buyer)
    {
        // $buyer = Buyer::find(3);
        // $data = $buyer->products;
        // $product = Product::find($data[0]->product_id);
        // return response(json_encode($product));
    }
    public function deleteCartItem($id)
    {

        $order = Order::find($id);
        $order->delete();
        $data = $this->sentCartData();

        $this->totalPrice();
        return $data;
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
