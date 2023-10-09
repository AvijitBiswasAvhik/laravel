<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use App\Http\Resources\Products;


class SingleProduct extends Controller
{
    function singleProduct($id){
        $product = Product::find($id);
        $data = new Products($product);
        return response(json_encode($data));
        
    }
}
