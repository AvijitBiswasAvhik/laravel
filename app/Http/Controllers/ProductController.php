<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Http\Requests\StoreProductRequest;
use App\Http\Requests\UpdateProductRequest;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\File;
use App\Http\Requests\StorePriceRequest;
use App\Http\Requests\UpdatePriceRequest;
use Illuminate\Support\Facades\Request;
use App\Models\Price;
use App\Http\Resources\Products;


class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = Product::all();
        return Products::collection($data);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(StoreProductRequest $request)
    {

        $data = $request->validated();
        $data['image'] = $this->saveImage($data['image']);
        if (File::exists($data['image'])) {
            $product = Product::create($data);
            if ($product) {
                $priceData = $data['price'];
                $priceData['product_id'] = $product->id;
                $nPrice = Price::create($priceData);
                if (!$nPrice) {
                    $nProduct = Product::find($product->id);
                    if ($nProduct->delete()) {
                        File::delete($data['image']);
                    }
                }
            } else {
                File::delete($data['image']);
                throw new \Exception('Something went wrong');
            }
        } else {
            throw new \Exception('invalid image type');
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProductRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProductRequest $request, Product $product)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        //
    }
    public function saveImage($image)
    {

        if (preg_match('/^data:image\/(\w+);base64,/', $image, $type)) {
            $type = $type[1];
            $image = substr($image, strpos($image, ',') + 1);
            $image = str_replace(' ', '+', $image);
            $image = base64_decode($image);
            if ($image === false) {
                throw new \Exception('Invalid image');
            }
        }
        $dir = 'product/images/';
        $file = Str::random(12) . '.' . $type;
        $absolutePath = public_path($dir);
        $relativePath = $dir . $file;
        if (!File::exists($absolutePath)) {
            File::makeDirectory($absolutePath, 0755, true);
        }
        file_put_contents($relativePath, $image);
        return $relativePath;
    }
}
