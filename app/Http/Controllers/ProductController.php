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

use function PHPUnit\Framework\returnSelf;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = Product::paginate(2);
        return Products::collection($data);
    }
    public function featureProduct($type = 'home')
    {
        if ($type == 'home') {
            $data = Product::take(5)->get();
        } elseif ($type != 'home') {
            $data = Product::where('category', $type)->take(5)->get();
        }

        return Products::collection($data);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(StoreProductRequest $request)
    {
        $data = $request->validated();
        $data['image'] = $this->saveImage($data['image'], '');
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
        return 'hello world';
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProductRequest $request, Product $product, Price $pr)
    {

        $data = $request->validated();
        $record = $product->find($data['id']);
        $prr = $pr->find($data['id']);

        $data['image'] = $this->saveImage($data['image'], $record['image']);
        if (File::exists($data['image']) && $record) {
            $product = $record->update($data);
            if ($product) {
                $priceData = $data['price'];
                $priceData['product_id'] = $data['id'];
                $nPrice = $prr->update($priceData);
                if (!$nPrice) {
                    $nProduct = Product::find($data['id']);
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


        // $allData = $record->all();
        // $allimg = [];
        // foreach ($allData as $key) {
        //     array_push($allimg, $key->image);
        // }
        // $dir = 'product/images/';
        // $filesAndDirectories = scandir($dir);
        // $files = array_filter($filesAndDirectories, function ($item) use ($dir) {
        //     return is_file($dir . '/' . $item);
        // });

        // foreach ($files as $key) {

        //     if(!in_array($dir.$key, $allimg)){

        //         if (File::exists($dir.$key)) {
        //         File::delete($dir.$key);
        //     }
        //     }
        // }
        // return response(json_encode($allData));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product, $id)
    {
        if ($id) {
            $product = Product::find($id);
            $confirm = $this->deleteImage($product->image);
            if ($confirm) {
                $product->delete();
            }
        }
    }
    public function hello()
    {
        return 'hello';
    }
    public function saveImage($image, $update)
    {
        $dir = 'product/images/';
        $absolutePath = public_path($dir);

        if (preg_match('/^data:image\/(\w+);base64,/', $image, $type)) {
            $type = $type[1];
            $image = substr($image, strpos($image, ',') + 1);
            $image = str_replace(' ', '+', $image);
            $image = base64_decode($image);
            if ($image === false) {
                throw new \Exception('Invalid image');
            }

            if ($update != null && File::exists($update)) {
                File::delete($update);
            }

            if (!File::exists($absolutePath)) {
                File::makeDirectory($absolutePath, 0755, true);
            }
            $file = Str::random(12) . '.' . $type;
            $relativePath = $dir . $file;
            $absolutePath = $dir . $file;
            file_put_contents($absolutePath, $image);
            return $relativePath;
        } elseif (preg_match('/^product\/images\/[a-zA-Z0-9]+\.(jpeg|jpg|png|gif)$/', $image)) {
            return $image;
        } else {
            return 'error';
        }
    }

    public function deleteImage($image)
    {
        if (File::exists($image)) {
            if (File::delete($image)) {
                return true;
            }
        }
    }
}
