<?php

namespace App\Models;

use App\Models\Scopes\PaymentMethodScope;
use App\Observers\ProductObserver;
use Illuminate\Database\Eloquent\Attributes\ObservedBy;
use Illuminate\Database\Eloquent\Attributes\ScopedBy;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

#[ScopedBy(PaymentMethodScope::class)]
#[ObservedBy(ProductObserver::class)]
class Product extends Model
{
    use HasFactory;

    protected $fillable = ['branch_id', 'name', 'unit', 'barcode', 'buying_price', 'selling_price', 'stock', 'quantity_per_stock', 'whole_sale', 'discount', 'stock_alert', 'expire_date', 'transport', 'status'];

    protected $casts = [
        'buying_price' => 'integer',
        'selling_price' => 'integer',
        'stock' => 'decimal:2',
        'quantity_per_stock' => 'decimal:2',
        'whole_sale' => 'decimal:2',
        'discount' => 'integer',
        'isActive' => 'boolean',
    ];

    public function scopeActive($query)
    {
        return $query->where('status', 1);
    }

    public function scopeSearch($query, $search)
    {
        return $query->where('name', 'like', '%'.$search.'%')
            ->orWhere('barcode', 'like', '%'.$search.'%');
    }

    public function branch(): BelongsTo
    {
        return $this->belongsTo(Branch::class);
    }

    public function cartItems(): HasMany
    {
        return $this->hasMany(CartItem::class);
    }

    public function orderItems(): HasMany
    {
        return $this->hasMany(OrderItem::class);
    }
}
