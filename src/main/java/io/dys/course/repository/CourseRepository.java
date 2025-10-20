package io.dys.course.repository;


import io.dys.course.entity.Course;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CourseRepository extends MongoRepository<Course,String> {
    Course findAndUpdateById(String id);
}
