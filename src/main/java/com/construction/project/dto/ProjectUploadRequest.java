
package com.construction.project.dto;

import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDate;

@Data
public class ProjectUploadRequest {

    private String title;

    private String location;

    private String description;

    private LocalDate completionDate;

    private MultipartFile image;
}
