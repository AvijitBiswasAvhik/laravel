<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
//use Illuminate\Database\Eloquent\Model;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Foundation\Auth\User as Authenticatable;
use App\Models\Order;
use App\Models\Product;
use App\Models\TotalPrice;
use App\Models\ConfirmOrder;

class Buyer extends Authenticatable implements MustVerifyEmail
{
    use HasFactory;
    use HasApiTokens;
    use Notifiable;
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    public function products() {
        return $this->belongsToMany(Product::class,'orders', 'buyer_id')->withPivot('id','qty');
    }

    public function totalPrice() {
        return $this->hasOne(TotalPrice::class);
    }
    public function confirmOrder(){
        return $this->hasMany(ConfirmOrder::class);
    }
}
