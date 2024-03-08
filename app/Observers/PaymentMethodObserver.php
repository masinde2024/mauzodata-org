<?php

namespace App\Observers;
use App\Models\PaymentMethod;

class PaymentMethodObserver
{
    public function creating(PaymentMethod $paymentMethod)
    {
        if (auth()->check()) 
            $paymentMethod->branch_id = auth()->user()->branch_id;
    }
}
