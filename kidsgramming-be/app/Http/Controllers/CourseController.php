<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateCourseRequest;
use App\Models\Course;
use Illuminate\Http\Request;

class CourseController extends Controller
{
    public function createCourse(CreateCourseRequest $request)
    {
        $course = Course::create($request->all());

        return response([
            'message' => 'Course created',
            'course' => $course
        ]);
    }
}
