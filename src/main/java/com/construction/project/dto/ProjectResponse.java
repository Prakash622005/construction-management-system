package com.construction.project.dto;

import lombok.Builder;
import lombok.Data;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@Builder
public class ProjectResponse {

    private Long id;

    private String title;

    private String location;

    private String description;

    private LocalDate completionDate;

    private String imagePath;

    private LocalDateTime createdAt;
}