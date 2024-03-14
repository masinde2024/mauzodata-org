<?php

namespace App\Observers;

use App\Models\Product;

class ProductObserver
{
    public function creating(Product $product)
    {
        if (auth()->check()) {
            $product->branch_id = auth()->user()->branch_id;
        }
    }
}
