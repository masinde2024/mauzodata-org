<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

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
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|string|max:255',
            'unit' => 'required|string|max:255',
            'barcode' => 'nullable|string|max:255',
            'buying_price' => 'required|numeric|max_digits:10',
            'selling_price' => 'required|numeric|max_digits:10',
            'stock' => 'required|numeric|max_digits:10',
            'quantity_per_stock' => 'nullable|numeric|max_digits:10',
            'whole_sale' => 'nullable|numeric|max_digits:10',
            'discount' => 'nullable|numeric|max_digits:10',
            'stock_alert' => 'required|numeric|max_digits:10',
            'expire_date' => 'nullable|string|max:255',
            'transport' => 'nullable|numeric|max_digits:10',
            'status' => 'required|boolean',
        ];
    }
}
