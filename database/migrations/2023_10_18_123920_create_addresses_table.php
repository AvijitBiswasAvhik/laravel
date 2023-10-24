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
        Schema::create('addresses', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('buyer_id');
            $table->string('country', 30);
            $table->string('district', 30);
            $table->string('city', 30)->nullable();
            $table->string('thana', 30)->nullable();
            $table->string('post', 30);
            $table->string('post_code', 30); // Changed to 'post_code' and removed the length
            $table->string('village', 30)->nullable();
            $table->timestamps(); // Removed the length
            $table->foreign('buyer_id')->references('id')->on('buyers')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('addresses');
    }
};
