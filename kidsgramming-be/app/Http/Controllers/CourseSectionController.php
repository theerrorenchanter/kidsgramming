<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateCourseSectionRequest;
use App\Models\CourseSection;

class CourseSectionController extends Controller
{
    public function createCourseSection(CreateCourseSectionRequest $request)
    {

        $course = CourseSection::create($request->all());

        return response([
            'message' => 'Course section created',
            'course_section' => $course
        ]);
    }

    public function list($id)
    {
        return CourseSection::find($id)->sectionVideos;
    }
}
