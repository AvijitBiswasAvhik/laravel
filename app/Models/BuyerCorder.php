<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BuyerCorder extends Model
{
    use HasFactory;
    protected $fillAble =[
        'buyer_id',
        'corder_id',
    ];
}
