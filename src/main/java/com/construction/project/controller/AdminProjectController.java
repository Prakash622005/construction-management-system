package com.construction.project.controller;

import com.construction.project.dto.ProjectResponse;
import com.construction.project.dto.ProjectUploadRequest;
import com.construction.project.service.ProjectService;
import lombok.RequiredArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDate;

@RestController
@RequestMapping("/api/admin/projects")
@RequiredArgsConstructor
@CrossOrigin("*")
public class AdminProjectController {

    private final ProjectService projectService;

    @PostMapping(
            value = "/upload",
            consumes = "multipart/form-data"
    )
    public ProjectResponse addProject(

            @RequestParam String title,

            @RequestParam String location,

            @RequestParam String description,

            @RequestParam
            @DateTimeFormat(
                    iso = DateTimeFormat.ISO.DATE
            )
            LocalDate completionDate,

            @RequestParam MultipartFile image
    ) {

        ProjectUploadRequest request =
                new ProjectUploadRequest();

        request.setTitle(title);
        request.setLocation(location);
        request.setDescription(description);
        request.setCompletionDate(completionDate);
        request.setImage(image);

        return projectService.addProject(request);
    }

    @PutMapping(
            value = "/{id}",
            consumes = "multipart/form-data"
    )
    public ProjectResponse updateProject(

            @PathVariable Long id,

            @RequestParam String title,

            @RequestParam String location,

            @RequestParam String description,

            @RequestParam
            @DateTimeFormat(
                    iso = DateTimeFormat.ISO.DATE
            )
            LocalDate completionDate,

            @RequestParam(required = false)
            MultipartFile image
    ) {

        ProjectUploadRequest request =
                new ProjectUploadRequest();

        request.setTitle(title);
        request.setLocation(location);
        request.setDescription(description);
        request.setCompletionDate(completionDate);
        request.setImage(image);

        return projectService.updateProject(
                id,
                request
        );
    }

    @DeleteMapping("/{id}")
    public String deleteProject(
            @PathVariable Long id
    ) {

        projectService.deleteProject(id);

        return "Project Deleted Successfully";
    }
}