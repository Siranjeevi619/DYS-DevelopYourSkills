package io.dys.course.service;


import io.dys.course.entity.Course;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import io.dys.course.repository.CourseRepository;

import java.util.List;

@Service
public class CourseService {

    @Autowired
    private CourseRepository courseRepository;


    public List<Course> findAllCourse() {
        return  courseRepository.findAll();
    }

    public Course getCourseById(String id) {
        return courseRepository.findById(id).orElse(null);
    }

    public Course addCourse(Course course) {
        return courseRepository.save(course);
    }

    public boolean isAlive(String id) {
        return courseRepository.existsById(id);
    }

    public Course updateCourseById(String id, Course updatedCourse) {
        return courseRepository.findById(id)
                .map(existingCourse -> {
                    updatedCourse.setId(existingCourse.getId()); // preserve the same ID
                    return courseRepository.save(updatedCourse);
                })
                .orElse(null);
    }

    public void deleteCourseById(String id) {
         courseRepository.deleteById(id);
    }
}
