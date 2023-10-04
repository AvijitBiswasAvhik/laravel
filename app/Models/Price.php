<?php

namespace App\Models;
use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Price extends Model
{
    use HasFactory;
    protected $fillable = [
        'price',
        'discount_price',
        'product_id',
        'tax',
        'stock',
    ];
    public function product()
    {
        return $this->belongsTo(Product::class);
    }
}
