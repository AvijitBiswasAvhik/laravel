<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function loginOrNot(){
        $user = Auth::user();
        if($user){
            return response('true');
        }else{
            return response($user);
        }
    }
}
