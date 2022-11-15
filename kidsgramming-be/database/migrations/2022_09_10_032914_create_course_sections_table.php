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
            $table->foreignId('professor')->required();
            $table->foreignId('course')->required();
            $table->timestamps();
        });

        Schema::table('course_sections', function (Blueprint $table) {
            $table->foreign('professor')
                ->references('id')
                ->on('users')
                ->onUpdate('cascade')
                ->onDelete('cascade');

            $table->foreign('course')
                ->references('id')
                ->on('courses')
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
