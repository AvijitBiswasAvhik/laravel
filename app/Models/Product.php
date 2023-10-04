<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Price;

class Product extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'sku',
        'barcode',
        'description',
        'category',
        'status',
        'image',
        'stock',
        'tax'
    ];
    public function prices()
    {
        return $this->hasOne(Price::class);
    }
}
