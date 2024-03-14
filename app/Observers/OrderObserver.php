<?php

namespace App\Observers;

use App\Models\Order;

class OrderObserver
{
    public function creating(Order $order)
    {
        if (auth()->check()) {
            $order->order_number = strtoupper(uniqid());
        }
        $order->user_id = auth()->id();
        $order->branch_id = auth()->user()->branch_id;
    }
}
