<?php

namespace App\Models;

use App\Models\Scopes\AccountScope;
use App\Observers\BranchObserver;
use Illuminate\Database\Eloquent\Attributes\ObservedBy;
use Illuminate\Database\Eloquent\Attributes\ScopedBy;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

#[ObservedBy(BranchObserver::class)]
#[ScopedBy(AccountScope::class)]
class Branch extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'account_id', 'phone', 'city', 'state', 'postal_code', 'email', 'status'];

    public function account(): BelongsTo
    {
        return $this->belongsTo(Account::class);
    }

    public function customers(): HasMany
    {
        return $this->hasMany(Customer::class);
    }

    public function paymentMethods(): HasMany
    {
        return $this->hasMany(PaymentMethod::class);
    }

    public function products(): HasMany
    {
        return $this->hasMany(Product::class);
    }
}
