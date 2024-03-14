<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCustomerRequest;
use App\Models\Customer;
use Inertia\Inertia;

class CustomerController extends Controller
{
    public function index()
    {
        if (request()->get('search') !== null) {
            return Inertia::render('Customers/Index', [
                'customers' => Customer::search(request()->get('search'))->paginate(10),
            ]);
        }

        return Inertia::render('Customers/Index', [
            'customers' => Customer::paginate(10),
        ]);
    }

    public function store(StoreCustomerRequest $request)
    {
        $customer = Customer::create($request->validated());

        return redirect()->back()->with('success', 'Customer created successfully');
    }
}
