<?php

namespace App\Observers;

use App\Models\Customer;

class CustomerObserver
{
    public function creating(Customer $customer)
    {
        if (auth()->check()) {
            $customer->branch_id = auth()->user()->branch_id;
        }
    }
}
