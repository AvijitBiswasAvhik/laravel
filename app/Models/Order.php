<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Buyer;

class Order extends Model
{
    use HasFactory;
    protected $fillable = [
        'product_id',
        'buyer_id',
        'status',
    ];

    public function buyers() {
        return $this->belongsToMany(Buyer::class,'buyer_order');
    }
}
