<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Mail;
use App\Mail\VerificationEmail;
use App\Models\Buyer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Notifications\CustomVerifyEmail;
use Illuminate\Support\Facades\Notification;
use App\Models\Refund;
use App\Models\ConfirmOrder;
use App\Models\Payment;



class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        // $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        return view('home');
    }
    public function verifyEmail(Request $request, $id, $token)
    {
        //
        $currentDateTime = now();

        // You can format the date and time as needed
        $formattedDateTime = $currentDateTime->format('Y-m-d H:i:s');

        if ($id && $token) {
            $dataUser = Buyer::find($id);
            if ($dataUser['remember_token'] == $token) {
                $dataUser['email_verified_at'] = $formattedDateTime;
                $dataUser->update();
                return response('You have successfully signed in with this account');
            }
        }
    }
    public function orders()
    {
        $user = auth()->user();
        $buyer = Buyer::find($user->id);
        $confirmOrder = $buyer->confirmOrder()->where('payment', 'Successful')->with('payment')->get();
        return response($confirmOrder);
    }
}
