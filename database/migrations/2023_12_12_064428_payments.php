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
        Schema::create('payments', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('buyer_id');
            $table->unsignedBigInteger('confirm_order_id');
            $table->text('id_token');
            $table->string('payment_id')->nullable();
            $table->string('trxId')->nullable();
            $table->timestamps();

            $table->foreign('buyer_id')
                ->references('id')
                ->on('buyers')
                ->onDelete('cascade')
                ->onUpdate('cascade');

            $table->foreign('confirm_order_id')
                ->references('id')
                ->on('confirm_orders')
                ->onDelete('cascade')
                ->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('payments');
    }
};
