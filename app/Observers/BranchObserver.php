<?php

namespace App\Observers;

use App\Models\Branch;

class BranchObserver
{
    public function creating(Branch $branch): void
    {
        if (auth()->check()) {
            $branch->account_id = auth()->user()->account_id;
        }
    }
}
