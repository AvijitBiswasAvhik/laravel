<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\ConfirmOrder;

class Payment extends Model
{
    use HasFactory;
    protected $fillable = [
        'buyer_id',
        'id_token',
        'payment_id', // If you've added 'amount', make sure it's included here
    ];
    public function confirmOrder(){
        return $this->belongsTo(ConfirmOrder::class);
    }
    
}
