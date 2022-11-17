<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SectionVideo extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'video_number',
        'available',
        'premium',
        'course_section_id',
        'video_url'
    ];

    public function courseSection()
    {
        return $this->belongsTo(CourseSection::class);
    }
}
