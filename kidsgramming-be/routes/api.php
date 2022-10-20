<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\CourseSectionController;
use App\Http\Controllers\CourseSectionVideoController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/auth/logout', [AuthController::class, 'logoutUser'])->name('users.logout');
    Route::post('/courses', [CourseController::class, 'createCourse'])->name('courses.create');
    Route::post('/courses/section', [CourseSectionController::class, 'createCourseSection'])->name('course.section.create');
    Route::post('/courses/section/video', [CourseSectionVideoController::class, 'createCourseSectionVideo'])->name('course.section.video.create');
});

Route::controller(AuthController::class)->group(function () {
    Route::post('/auth/register', 'registerUser')->name('users.register');
    Route::post('/auth/login', 'loginUser')->name('users.login');
});