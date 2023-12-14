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
        Schema::create('confirm_orders', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('buyer_id');
            $table->string('payment_id');
            $table->string('status', 30)->default('active');
            $table->integer('quantity')->default(1);
            $table->decimal('total_amount', 10, 2);
            $table->string('payment');
            $table->string('payment_method');
            $table->string('order_number');
            $table->foreign('buyer_id')
                ->references('id')
                ->on('buyers')
                ->onDelete('cascade')
                ->onUpdate('cascade'); // Add onUpdate if applicable
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('confirm_orders');
    }
};
