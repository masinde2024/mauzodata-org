<?php

namespace App\Models;

use App\Models\Scopes\BranchScope;
use App\Observers\CustomerObserver;
use Illuminate\Database\Eloquent\Attributes\ObservedBy;
use Illuminate\Database\Eloquent\Attributes\ScopedBy;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

#[ObservedBy(CustomerObserver::class)]
#[ScopedBy(BranchScope::class)]
class Customer extends Model
{
    use HasFactory;

    protected $fillable = ['branch_id', 'name', 'contact', 'address'];

    public function branch(): BelongsTo
    {
        return $this->belongsTo(Branch::class);
    }

    public function scopeSearch($query, $search)
    {
        return $query->where('name', 'like', '%'.$search.'%')
            ->orWhere('contact', 'like', '%'.$search.'%');
    }

    public function orders(): HasMany
    {
        return $this->hasMany(Order::class);
    }
}
