<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('course_sections', function (Blueprint $table) {
            $table->id();
            $table->string('title', 100)->required();
            $table->text('description')->required();
            $table->integer('section_number')->required();
            $table->boolean('available')->default(false)->required();
            $table->boolean('premium')->default(false)->required();
            $table->string('cover_image')->nullable();
            $table->string('user_professor')->required();
            $table->timestamps();
        });

        Schema::table('course_sections', function (Blueprint $table) {
            $table->foreign('cs_user_professor')
                ->references('id')
                ->on('users')
                ->onUpdate('cascade')
                ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('course_section');
    }
};
