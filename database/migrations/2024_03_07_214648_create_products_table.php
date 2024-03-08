<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->foreignId('branch_id')->constrained()->cascadeOnDelete();
            $table->string('name');
            $table->string('unit')->nullable();
            $table->string('barcode')->nullable();
            $table->decimal('buying_price');
            $table->decimal('selling_price');
            $table->decimal('stock');
            $table->decimal('quantity_per_stock')->default(1);
            $table->decimal('whole_sale')->default(1);
            $table->decimal('discount')->default(0);
            $table->decimal('stock_alert')->default(0);
            $table->string('expire_date')->nullable();
            $table->decimal('transport')->default(0);
            $table->boolean('isActive')->default(true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
