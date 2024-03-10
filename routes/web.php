<?php

use App\Http\Controllers\BranchController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\PaymentMethodController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::prefix('app')->group(function () {
    Route::middleware(['auth', 'verified'])->get('/', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');

    Route::middleware('auth')->group(function () {
        Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
        Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
        Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    });

    Route::resource('branches', BranchController::class)
        ->middleware('auth')
        ->only(['index', 'create', 'show', 'edit', 'store', 'update', 'destroy']);

    Route::resource('customers', CustomerController::class)
        ->middleware('auth')
        ->only(['index', 'edit', 'store', 'update', 'destroy']);

    Route::resource('payments', PaymentMethodController::class)
        ->middleware('auth')
        ->only(['index', 'edit', 'store', 'update', 'destroy']);

    Route::resource('products', ProductController::class)
        ->middleware(['auth', 'remove_comma_from_input'])
        ->only(['index', 'create', 'edit', 'store', 'update', 'destroy']);
});


require __DIR__.'/auth.php';
