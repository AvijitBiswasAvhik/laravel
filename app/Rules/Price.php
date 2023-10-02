<?php

namespace App\Rules;

use Closure;
use Illuminate\Contracts\Validation\ValidationRule;

use function PHPUnit\Framework\isEmpty;

class Price implements ValidationRule
{
    /**
     * Run the validation rule.
     *
     * @param  \Closure(string): \Illuminate\Translation\PotentiallyTranslatedString  $fail
     */
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        $arr = [];
        $requiredKeys = ['price', 'discount_price', 'tax', 'stock'];
        foreach ($requiredKeys as $key) {
            if (!array_key_exists($key, $value)) {
                $arr[$key] = $key . ' is empty';
            }
        }
        if (!is_array($value)) {
            $fail('Enter price value');
        }

        $price = intval($value['price']);
        if (!is_int($price) || $price < 1) {

            //array_push($arr,'price'=>'Price must be entered as a number');
            $arr['price'] = 'Price must be entered as a number';
        }
        if ($value['discount_price']) {
            $discountPrice = intval($value['discount_price']);
            if ($discountPrice >= $price) {
                $arr['discount_price'] = 'Discount price is higher than price';
            }
        }
        if(!empty($arr)){
            $fail(json_encode($arr));
        }
        
    }
}
