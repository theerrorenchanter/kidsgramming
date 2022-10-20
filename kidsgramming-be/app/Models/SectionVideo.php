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
        'available',
        'premium',
        'cover_image',
        'user_professor',
        'video_number'
    ];
}
