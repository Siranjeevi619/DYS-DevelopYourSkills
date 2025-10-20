package io.dys.course.entity;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection="course")
public class Course {


    @Id
    private String id = generateId();


    private String title;
    private String description;
    private String author;
    private String category;
    private String authorLogo;
    private String thumbnailUrl;
    private List<String> videoUrls;
    private List<String> videoTitle;
    private List<String> documents;
    private List<String> certifications;
    private List<String> tags;


    @CreatedDate
    private LocalDateTime createAt;

    @LastModifiedDate
    private LocalDateTime updateAt;


    private static String generateId() {
        String objectId = new org.bson.types.ObjectId().toHexString();
        return objectId.substring(0, 8) + "-" +
                objectId.substring(8, 16) + "-" +
                objectId.substring(16, 24);
    }
}
