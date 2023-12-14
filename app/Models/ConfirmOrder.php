<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Product;
use App\Models\Buyer;
use App\Models\Payment;

class ConfirmOrder extends Model
{
    use HasFactory;
    protected $fillable = [
        'buyer_id',
        'product_id',
        'payment_id',
        'status',
        'quantity',
        'total_amount',
        'payment',
        'payment_method',
        'order_number',
    ];
    public function products()
    {
        return $this->belongsToMany(Product::class);
    }
    public function buyer()
    {
        return $this->belongsTo(Buyer::class);
    }
    public function payment()
    {
        return $this->hasOne(Payment::class);
    }
}
