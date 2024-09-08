<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateCourseVideoRequest;
use App\Models\SectionVideo;

class CourseSectionVideoController extends Controller
{
    public function createCourseSectionVideo(CreateCourseVideoRequest $request)
    {

        $course = SectionVideo::create($request->all());

        return response([
            'message' => 'Course video section created',
            'video' => $course
        ]);
    }
}
