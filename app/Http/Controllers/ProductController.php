<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProductController extends Controller
{
    function hello()
    {
        return response('welcome');
    }
}
