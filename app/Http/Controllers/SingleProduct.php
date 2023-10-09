<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SingleProduct extends Controller
{
    function singleProduct(){
        return view('singleProduct');
    }
}
