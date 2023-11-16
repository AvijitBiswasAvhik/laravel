<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Buyer;

class TotalPrice extends Model
{
    use HasFactory;
    protected $fillable = [
        'total_price',
        'total_product',
        'buyer_id',
    ];
    public function buyer(){
        return $this->belongsTo(Buyer::class, 'id');
    }
}
