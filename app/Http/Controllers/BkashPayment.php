<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use App\Models\Payment;
use Illuminate\Support\Facades\Redirect;
use App\Models\ConfirmOrder;
use App\Models\Order;
use Illuminate\Support\Str;
use App\Http\Controllers\BuyerController;
use App\Models\Buyer;
use App\Http\Requests\RefundRequest;
use App\Models\Refund;

class BkashPayment extends Controller
{
    //

    private $userName;
    private $password;
    private $appKey;
    private $appSecretKey;
    private $bodyText;
    private $data;
    private $buyerController;
    public function __construct(BuyerController $buyerController)
    {
        $this->userName = '01969691847';
        $this->password = '%TyCtOB>[3h';
        $this->appKey = 'FNmZbC5Heyk0RDRax4WNSNEPtc';
        $this->appSecretKey = 'Tc8fSFbdUUY1dLl3Z6PDmLv9v7nKOAn0M4HjBNPoGk85oBF7Zs89';
        $this->bodyText = [
            "Content-Type" => "application/json",
            "Accept" => "application/json",
        ];
        $this->buyerController = $buyerController;
    }

    public function granToken($price)
    {
        try {

            $response = Http::withHeaders([
                "Content-Type" => "application/json",
                "Accept" => "application/json",
                "username" => $this->userName,
                "password" => $this->password,
            ])
                ->post("https://tokenized.pay.bka.sh/v1.2.0-beta/tokenized/checkout/token/grant", [
                    'app_key' => $this->appKey,
                    'app_secret' => $this->appSecretKey
                ]);
            // Check the HTTP status code

            $responseData = $this->sendResponse($response);

            if ($responseData['statusCode'] == 0000 && $responseData['statusMessage'] == 'Successful') {
                if ($price) {
                    return response($this->createPayment($responseData['id_token'], $price));
                } else {
                    return response()->json(['Price' => 'Does not have any value']);
                }
            }
        } catch (\Exception $exception) {
            return response()->json(['error' => 'Internal Server Error'], 500);
        }
    }

    public function createPayment($idToken, $price)
    {

        try {
            $response = Http::withHeaders([
                "Content-Type" => "application/json",
                "Accept" => "application/json",
                "Authorization" => $idToken,
                "X-App-Key" => $this->appKey,
            ])
                ->post('https://tokenized.pay.bka.sh/v1.2.0-beta/tokenized/checkout/create', [

                    "mode" => "0011",
                    "payerReference" => "01969691847",
                    "callbackURL" => "https://avijitbiswas.me/home",
                    "amount" => $price,
                    "currency" => "BDT",
                    "intent" => "sale",
                    "merchantInvoiceNumber" => "Inv0124"

                ]);

            $data = $this->sendResponse($response);

            if ($data['statusMessage'] == "Successful") {
                $buyer = auth()->user();
                $buyerTable = Buyer::find($buyer->id);
                $cartData = $this->buyerController->sentCartData(true);


                //$payment = Payment::where('buyer_id', '=', $buyer->id)->first();
                //$order = Order::find($buyer->id);

                $orderData = [
                    'payment_id' => $data["paymentID"],
                    'status' => 'active',
                    'quantity' => $cartData['total_product'],
                    'total_amount' => $data['amount'],
                    'payment_method' => 'bkash',
                    'payment' => 'processing',
                    'order_number' => Str::random(10),

                ];

                $confirmOrder = $buyerTable->confirmOrder()->create($orderData); //ConfirmOrder::create($paymentData);
                if ($confirmOrder) {

                    //return response($cartData['to']);

                    //return response($paymentData);

                    $products = $buyerTable->products->pluck('id')->toArray();


                    $paymentData = [
                        'buyer_id' => $buyer->id,
                        'id_token'   => $idToken,
                        'payment_id' => $data["paymentID"],
                        'amount' => $data["amount"],

                        // 'amount'   => 100, // You can uncomment this line and set the amount value.
                    ];

                    $payment = $confirmOrder->payment()->create($paymentData);
                    if ($payment) {
                        $confirmOrder->products()->attach($products);
                        return $data;
                    }
                }
            }
        } catch (\Exception $exception) {
            return response()->json(['error' => 'Internal Server Error'], 500);
        };
    }

    public function executePayment(Request $request)
    {
        $payment = Payment::where('payment_id', '=', $request->input('paymentID'))->first();
        $confirmOrder = ConfirmOrder::where('payment_id', '=', $request->input('paymentID'))->first();
        if ($request->input('paymentID') && $request->input('status')) {

            try {
                $response = Http::withHeaders([
                    "Accept" => "application/json",
                    "Authorization" => $payment['id_token'],
                    "X-App-Key" => $this->appKey,
                ])
                    ->post('https://tokenized.pay.bka.sh/v1.2.0-beta/tokenized/checkout/execute', [
                        'paymentID' => $payment['payment_id']
                    ]);
                $responseData = $this->sendResponse($response);
                if ($responseData['statusMessage'] == "Successful") {
                    $paymentUpdate = Payment::find($payment['id']);
                    $paymentUpdate->trxId = $responseData['trxID'];
                    $updatedPayment = $paymentUpdate->save();
                    if ($updatedPayment) {
                        $confirmOrderUpdate = ConfirmOrder::find($confirmOrder['id']);
                        $confirmOrderUpdate->payment = 'Successful';
                        $confirmOrderUpdate->save();
                        if ($confirmOrderUpdate) {
                            return Redirect::away('http://localhost:3001/product/men');
                        }
                    }
                    // now confirm the order //


                } else {
                    return Redirect::away('http://localhost:3001/product/men?payment=Unsucessful');
                }
            } catch (\Exception $exception) {
                return response()->json(['error' => 'Internal Server Error'], 500);
            };
        }
    }

    public function refund(RefundRequest $request)
    {
        if (Refund::create($request->validated())) {
            return response()->json(['success' => 'You successfully submitted a refund request'], 200);
        } else {
            return response()->json(['fail' => 'Your request not submitted'], 200);
        }
    }

    public function refundRequest()
    {
        $data = Refund::all();
        return response()->json(['success' => true, 'data' => $data], 200);
    }


    public function refundAccept(Request $request)
    {
        $order = $request->validate([
            'order' => 'required'
        ]);
        $order = ConfirmOrder::where('order_number', $order)->first();
        $payment = Payment::where('payment_id', $order['payment_id'])->first();
        try {
            $response = Http::withHeaders([
                "Accept" => "application/json",
                "Authorization" => $payment['id_token'],
                "X-App-Key" => $this->appKey,
            ])
                ->post('https://tokenized.pay.bka.sh/v1.2.0-beta/tokenized/checkout/payment/refund', [
                    'paymentID' => $payment['payment_id'],
                    'amount' => $order['total_amount'],
                    'trxID' => $payment['trxId'],
                    'sku' => 'ybew',
                    'reason' => 'emember to adjust the route',
                ]);
            $data = $this->sendResponse($response);
            $deleted = Refund::where('order_number', $order['order_number']) // For example, only delete if the item belongs to the authenticated user
                ->delete();
            if ($deleted) {
                return response($data);
            }
        } catch (\Exception $exception) {
            return response()->json(['error' => 'Internal Server Error'], 500);
        };
        return response()->json(['success' => true, 'payment' => $payment], 200);
    }



    public function sendResponse($response)
    {
        if ($response->successful()) {
            // Success: Status code 2xx
            //$responseData = $response->json();
            return $response;
        } elseif ($response->clientError()) {
            // Client error: Status code 4xx
            $errorResponse = $response->json();
            return response()->json(['error' => $errorResponse], $response->status());
        } elseif ($response->serverError()) {
            // Server error: Status code 5xx
            return response()->json(['error' => 'Internal Server Error'], $response->status());
        }

        // Handle other status codes as needed
        return response()->json(['error' => 'Unexpected Error'], 500);
    }
}
