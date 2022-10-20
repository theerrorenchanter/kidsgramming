<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateCourseVideoRequest;
use App\Models\CourseSection;

class CourseSectionVideoController extends Controller
{
    public function createCourseSectionVideo(CreateCourseVideoRequest $request)
    {

        $course = CourseSection::create($request->all());

        return response([
            'message' => 'Course section created',
            'course_section' => $course
        ]);
    }
}
