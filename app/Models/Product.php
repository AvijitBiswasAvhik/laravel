<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Rules\Price;

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
    ];
    public function price(){
        return $this->hasOne(Price::class);
    }
}
