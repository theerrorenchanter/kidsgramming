<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateCourseRequest;
use App\Models\CourseSection;

class CourseSectionController extends Controller
{
    public function createCourseSection(CreateCourseRequest $request)
    {

        $course = CourseSection::create($request->all());

        return response([
            'message' => 'Course section created',
            'course_section' => $course
        ]);
    }
}
