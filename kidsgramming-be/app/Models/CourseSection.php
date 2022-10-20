<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CourseSection extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'available',
        'premium',
        'cover_image',
        'user_professor',
        'section_number'
    ];

    public function sectionVideos()
    {
        return $this->hasMany(SectionVideo::class);
    }
}
