package com.construction.project.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "projects")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Project {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    private String location;

    @Column(columnDefinition = "TEXT")
    private String description;

    private LocalDate completionDate;

    @Column(columnDefinition = "TEXT")
    private String imagePath;

    private LocalDateTime createdAt;
}