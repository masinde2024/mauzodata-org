<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorePaymentMethodRequest;
use App\Models\PaymentMethod;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class PaymentMethodController extends Controller
{
    public function index(): Response
    {
        return Inertia::render("Payments/Index", [
            "payments"=> PaymentMethod::all(),
        ]);
    }

    public function store(StorePaymentMethodRequest $request): RedirectResponse
    {
        $paymentMethod = PaymentMethod::create($request->validated());
        return redirect(route("payments.index"))->with("status", [
            'type' => "success",
            "message"=> __("Created successfully!"),
        ]);
    }

    public function update(StorePaymentMethodRequest $request, PaymentMethod $paymentMethod): RedirectResponse
    {
        $paymentMethod->update($request->validated());
        return redirect(route("payments.index"))->with("status", [
            "type"=> "success",
            "message"=> __("Updated successfully."),
            ]);
    }

    public function destroy(PaymentMethod $paymentMethod): RedirectResponse
    {
        $paymentMethod->delete();
        return redirect(route("payments.index"))->with("status", [
            "type"=> "success",
            "message"=> __("Deleted successfully."),
        ]);
    }
}
