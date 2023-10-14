<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use App\Rules\Base64Image;
use App\Rules\Price;

class UpdateProductRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'id' => 'required|integer',
            'name' => 'required|string|max:100',
            'sku' => 'nullable|string|max:10',
            'barcode' => 'nullable|string|max:20',
            'description' => 'required|string|max:1000',
            'category' => 'required|string|max:50',
            'status' => 'required|string|max:60',
            'image' => ['string', new Base64Image()],
            'price' => ['required', new Price],
        ];
    }
}
