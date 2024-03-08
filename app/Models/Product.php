<?php

namespace App\Models;

use App\Models\Scopes\PaymentMethodScope;
use App\Observers\ProductObserver;
use Illuminate\Database\Eloquent\Attributes\ObservedBy;
use Illuminate\Database\Eloquent\Attributes\ScopedBy;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

#[ScopedBy(PaymentMethodScope::class)]
#[ObservedBy(ProductObserver::class)]
class Product extends Model
{
    use HasFactory;

    protected $fillable = ['branch_id', 'name', 'unit', 'barcode', 'buying_price', 'selling_price', 'stock', 'quantity_per_stock', 'whole_sale', 'discount', 'stock_alert', 'expire_date', 'transport', 'status'];

    protected $casts = [
        'isActive' => 'boolean'
    ];

    public function branch(): BelongsTo
    {
        return $this->belongsTo(Branch::class);
    }
}
