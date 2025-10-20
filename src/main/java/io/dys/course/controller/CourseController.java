package io.dys.course.controller;

import io.dys.course.dto.ResponseDTO;
import io.dys.course.entity.Course;
import io.dys.course.service.CourseService;
import io.dys.course.utils.Status;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/course")
public class CourseController {

    @Autowired
    private CourseService courseService;

    @GetMapping("/all-course")
    public ResponseEntity<ResponseDTO<List<Course>>> findAllCourse(HttpServletRequest request) {
        List<Course> courses = courseService.findAllCourse();
        ResponseDTO<List<Course>> response = new ResponseDTO<>();
        response.setApi(request.getRequestURI());

        if (courses.isEmpty()) {
            response.setData(new ArrayList<>());
            response.setMessage("No Courses Found");
            response.setStatus(Status.ACCEPT);
            return new ResponseEntity<>(response, HttpStatus.OK);
        }

        response.setData(courses);
        response.setMessage("Courses fetched successfully");
        response.setStatus(Status.SUCCESS);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ResponseDTO<Course>> findCourseById(@PathVariable String id, HttpServletRequest request) {
        ResponseDTO<Course> response = new ResponseDTO<>();
        response.setApi(request.getRequestURI());

        if (id == null || id.isEmpty()) {
            response.setData(null);
            response.setMessage("Invalid Course ID");
            response.setStatus(Status.ERROR);
            return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
        }

        Course course = courseService.getCourseById(id);

        if (course == null) {
            response.setData(null);
            response.setMessage("Course Not Found");
            response.setStatus(Status.ACCEPT);
            return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
        }

        response.setData(course);
        response.setMessage("Course fetched successfully");
        response.setStatus(Status.SUCCESS);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<ResponseDTO<Course>> addCourse(@RequestBody Course course, HttpServletRequest request) {
        ResponseDTO<Course> response = new ResponseDTO<>();
        response.setApi(request.getRequestURI());

        if (course == null) {
            response.setData(null);
            response.setMessage("Invalid Course Data");
            response.setStatus(Status.ERROR);
            return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
        }

        Course savedCourse = courseService.addCourse(course);
        response.setData(savedCourse);
        response.setMessage("Course added successfully");
        response.setStatus(Status.SUCCESS);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    @PutMapping("/update-course")
    public ResponseEntity<ResponseDTO<Course>> updateCourse(@RequestParam String id, @RequestBody Course course, HttpServletRequest request) {
        ResponseDTO<Course> response = new ResponseDTO<>();
        response.setApi(request.getRequestURI());

        if (id == null || id.isEmpty() || !courseService.isAlive(id)) {
            response.setData(null);
            response.setMessage("Invalid Course ID or Course Not Found");
            response.setStatus(Status.ERROR);
            return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
        }

        Course updatedCourse = courseService.updateCourseById(id, course);
        response.setData(updatedCourse);
        response.setMessage("Course updated successfully");
        response.setStatus(Status.SUCCESS);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @DeleteMapping("/delete-course")
    public ResponseEntity<ResponseDTO<String>> deleteCourse(@RequestParam String id, HttpServletRequest request) {
        ResponseDTO<String> response = new ResponseDTO<>();
        response.setApi(request.getRequestURI());

        if (id == null || id.isEmpty() || !courseService.isAlive(id)) {
            response.setData(null);
            response.setMessage("Invalid Course ID or Course Not Found");
            response.setStatus(Status.ERROR);
            return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
        }

        courseService.deleteCourseById(id);
        response.setData(id);
        response.setMessage("Course deleted successfully");
        response.setStatus(Status.SUCCESS);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}
