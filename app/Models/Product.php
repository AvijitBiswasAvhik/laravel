<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Price;
use App\Models\Buyer;

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
    public function orders(){
        return $this->belongsToMany(Buyer::class, 'orders', 'buyer_id')->withPivot('id','qty');
    }
}
