<?php

namespace App\Models;

use App\Models\Scopes\BranchScope;
use App\Observers\OrderObserver;
use Illuminate\Database\Eloquent\Attributes\ObservedBy;
use Illuminate\Database\Eloquent\Attributes\ScopedBy;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

#[ScopedBy(BranchScope::class)]
#[ObservedBy(OrderObserver::class)]
class Order extends Model
{
    use HasFactory;

    protected $fillable = [
        'branch_id',
        'user_id',
        'customer_id',
        'payment_method_id',
        'order_number',
        'paid',
    ];

    public function customer(): BelongsTo
    {
        return $this->belongsTo(Customer::class);
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function paymentMethod(): BelongsTo
    {
        return $this->belongsTo(PaymentMethod::class);
    }
}
