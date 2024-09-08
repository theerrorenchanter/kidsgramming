import { instance } from '../instance'

export const createCourse = async formData => {
  try {
    const result = await instance.post('courses', formData)
    const { data, status } = result
    const { course } = data

    return {
      ok: status === 200,
      course,
      errorMessage: null
    }
  } catch (error) {
    const { response } = error
    const { status } = response
    const errorMessage = response.data ? response.data.message : error.message

    return {
      ok: status === 200,
      course: null,
      errorMessage
    }
  }
}

export const createCourseVideo = async formData => {
  try {
    const result = await instance.post('courses/section/video', formData)
    const { data, status } = result
    const { video } = data

    return {
      ok: status === 200,
      video,
      errorMessage: null
    }
  } catch (error) {
    const { response } = error
    const { status } = response
    const errorMessage = response.data ? response.data.message : error.message

    return {
      ok: status === 200,
      video: null,
      errorMessage
    }
  }
}

export const getCourse = async courseId => {
  try {
    const result = await instance.get(`courses/${courseId}`)
    const { data, status } = result
    const { course } = data

    return {
      ok: status === 200,
      course,
      errorMessage: null
    }
  } catch (error) {
    const { response } = error
    const { status } = response
    const errorMessage = response.data ? response.data.message : error.message

    return {
      ok: status === 200,
      course: null,
      errorMessage
    }
  }
}

export const getCourseSections = async courseId => {
  try {
    const result = await instance.get(`courses/sections/${courseId}`)
    const { data, status } = result

    return {
      ok: status === 200,
      sections: data,
      errorMessage: null
    }
  } catch (error) {
    const { response } = error
    const { status } = response
    const errorMessage = response.data ? response.data.message : error.message

    return {
      ok: status === 200,
      sections: [],
      errorMessage
    }
  }
}

export const getCourseVideos = async sectionId => {
  try {
    const result = await instance.get(`courses/sections/videos/${sectionId}`)
    const { data, status } = result

    return {
      ok: status === 200,
      videos: data,
      errorMessage: null
    }
  } catch (error) {
    const { response } = error
    const { status } = response
    const errorMessage = response.data ? response.data.message : error.message

    return {
      ok: status === 200,
      videos: [],
      errorMessage
    }
  }
}

export const createSection = async formData => {
  try {
    const result = await instance.post('courses/section', formData)
    const { data, status } = result
    const { course_section: section } = data

    return {
      ok: status === 200,
      section,
      errorMessage: null
    }
  } catch (error) {
    const { response } = error
    const { status } = response
    const errorMessage = response.data ? response.data.message : error.message

    return {
      ok: status === 200,
      course: null,
      errorMessage
    }
  }
}
