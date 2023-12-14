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
        Schema::create('confirm_order_product', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('confirm_order_id');
            $table->unsignedBigInteger('product_id');
            $table->timestamps();

            // Define foreign key constraints
            $table->foreign('confirm_order_id')->references('id')->on('confirm_orders')->onDelete('cascade');
            $table->foreign('product_id')->references('id')->on('products')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('confirm_order_product');
    }
};
