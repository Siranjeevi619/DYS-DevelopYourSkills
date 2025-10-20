package io.dys.course.controller;


import io.dys.course.entity.Course;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import io.dys.course.service.CourseService;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/course")
public class CourseController {
    @Autowired
    private CourseService courseService;

    @GetMapping("/all-course")
    public List<Course> findAllCourse(){
        List<Course> courses = courseService.findAllCourse();
        if(courses.isEmpty()){
            return new ArrayList<>();
        }
        return courses;
    }

    @GetMapping("/{id}")
    public Course findCourseById(@PathVariable String id){
        if(id.isEmpty()){
            return  null;
        }
        Course findCourse = courseService.getCourseById(id);
        if(findCourse == null){
            return null;
        }
        return findCourse;
    }


    @PostMapping("/add")
    public Course addCourse(@RequestBody Course course){
        return courseService.addCourse(course);
    }


    @PutMapping("/update-course")
    public Course updateCourse(@RequestParam String id, @RequestBody Course course){
        if(id.isEmpty()){
            return null;
        }
        if(!courseService.isAlive(id)){
            return null;
        }
        return courseService.updateCourseById(id, course);
    }

    @DeleteMapping("/delete-course")
    public String deleteCourse(@RequestParam String id){
        if(id.isEmpty()){
            return null;
        }
        if(!courseService.isAlive(id)){
            return null;
        }
         courseService.deleteCourseById(id);
        return "Course Deleted Successfully"+ id;
    }


}
