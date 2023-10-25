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
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('buyer_id');
            $table->unsignedBigInteger('product_id');
            $table->string('status', 30)->default('active');
            $table->integer('qty')->default(1);
            $table->timestamps();
            
            $table->foreign('buyer_id')
                  ->references('id')
                  ->on('buyers')
                  ->onDelete('cascade')
                  ->onUpdate('cascade'); // Add onUpdate if applicable
            
            $table->foreign('product_id')
                  ->references('id')
                  ->on('products')
                  ->onDelete('cascade')
                  ->onUpdate('cascade'); // Add onUpdate if applicable
        });
        
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};
