<?php

namespace App\Models;

use App\Models\Scopes\PaymentMethodScope;
use App\Observers\PaymentMethodObserver;
use Illuminate\Database\Eloquent\Attributes\ObservedBy;
use Illuminate\Database\Eloquent\Attributes\ScopedBy;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;



#[ObservedBy(PaymentMethodObserver::class)]
#[ScopedBy(PaymentMethodScope::class)]
class PaymentMethod extends Model
{
    use HasFactory;

    protected $fillable = ['branch_id', 'name', 'number', 'isActive'];

    protected $casts = [
        'isActive' => 'boolean'
    ];

    public function branch(): BelongsTo
    {
        return $this->belongsTo(Branch::class);
    }
}
