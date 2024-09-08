<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'available',
        'premium',
        'cover_image',
        'professor'
    ];

    public function courseSections()
    {
        return $this->hasMany(CourseSection::class);
    }
}
