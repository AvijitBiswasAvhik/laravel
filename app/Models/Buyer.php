<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
//use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Foundation\Auth\User as Authenticatable;
use App\Models\Order;

class Buyer extends Authenticatable
{
    use HasFactory;
    use HasApiTokens;
    protected $fillable = [
        'name',
        'email',
        'password',
    ];
    public function orders() {
        return $this->belongsToMany(Order::class,'buyer_order');
    }
}