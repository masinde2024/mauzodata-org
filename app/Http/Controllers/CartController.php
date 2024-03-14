<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCartRequest;
use App\Http\Requests\UpdateCartRequest;
use App\Models\Cart;
use App\Models\CartItem;
use App\Models\Customer;
use App\Models\PaymentMethod;
use App\Models\Product;
use Illuminate\Http\Request;

class CartController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $products = Product::orderBy('updated_at', 'desc')->paginate(3);
        if (request()->get('search') !== null) {
            $products = Product::search(request()->get('search'))->paginate(3);
        }

        return inertia('Cart/Index', [
            'products' => $products,
            'cart' => Cart::with(['user', 'items.product'])->first(),
            'customers' => Customer::get(),
            'payments' => PaymentMethod::get(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $cart = Cart::with('items')->firstOrCreate([
            'user_id' => auth()->id(),
        ]);

        $cart->items()->updateOrCreate([
            'product_id' => $request->product_id,
        ], [
            'quantity' => $request->quantity,
            'price' => $request->price,
            'discount' => 0,
            'transport' => 0,
        ]);

        return redirect()->back();
    }

    /**
     * Display the specified resource.
     */
    public function show(Cart $cart)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Cart $cart)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, CartItem $item)
    {
        $validated = $request->validate([
            'quantity' => 'required|numeric|max_digits:8|gt:0',
        ]);
        $item->update($validated);
        return redirect()->back();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(CartItem $item)
    {
        $item->delete();
        return redirect()->back();
    }
}
