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
            $table->text('description')->nullable();
            $table->integer('video_number')->nullable();
            $table->boolean('available')->default(true)->nullable();
            $table->boolean('premium')->default(false)->nullable();
            $table->foreignId('course_section_id')->constrained()->onDelete('cascade')->onUpdate('cascade');
            $table->string('video_url')->nullable();
            $table->timestamps();
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
