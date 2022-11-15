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
        Schema::create('section_videos', function (Blueprint $table) {
            $table->id();
            $table->string('title', 100)->required();
            $table->text('description')->required();
            $table->integer('video_number')->required();
            $table->boolean('available')->default(false)->required();
            $table->boolean('premium')->default(false)->required();
            $table->string('cover_image')->nullable();
            $table->foreignId('professor')->required();
            $table->foreignId('course_section')->required();
            $table->string('video_url')->nullable();
            $table->timestamps();
        });

        Schema::table('section_videos', function (Blueprint $table) {
            $table->foreign('professor')
                ->references('id')
                ->on('users')
                ->onUpdate('cascade')
                ->onDelete('cascade');

             $table->foreign('course_section')
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
        Schema::dropIfExists('section_videos');
    }
};
