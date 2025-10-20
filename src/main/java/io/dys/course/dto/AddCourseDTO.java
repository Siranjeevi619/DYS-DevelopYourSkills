package io.dys.course.dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AddCourseDTO {
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
}
