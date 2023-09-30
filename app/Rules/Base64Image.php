<?php

namespace App\Rules;

use Closure;
use Illuminate\Contracts\Validation\ValidationRule;

class Base64Image implements ValidationRule
{
    /**
     * Run the validation rule.
     *
     * @param  \Closure(string): \Illuminate\Translation\PotentiallyTranslatedString  $fail
     */
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        if (preg_match('/^data:image\/(\w+);base64,/', $value, $type)) {
            $image = substr($value, strpos($value, ',') + 1);
            $image = str_replace(' ', '+', $image);

            
           if (!in_array($type[1], array('jpg', 'jpeg', 'png', 'gif'))) {
                $fail('The image must be of type jpg, jpeg, png, or gif');
            }
            $image = base64_decode($image);
            if ($image === false) {
                $fail('Please submit a valid image base');
            }
        }else{
            $fail('Please submit a valid image');
        }
        
    }
}
