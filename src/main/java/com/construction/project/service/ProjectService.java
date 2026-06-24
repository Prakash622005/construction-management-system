package com.construction.project.service;

import com.construction.exception.ResourceNotFoundException;
import com.construction.project.dto.ProjectResponse;
import com.construction.project.dto.ProjectUploadRequest;
import com.construction.project.entity.Project;
import com.construction.project.repository.ProjectRepository;
import com.construction.util.FileUploadUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ProjectService {

    private final ProjectRepository projectRepository;
    private final FileUploadUtil fileUploadUtil;


    public ProjectResponse addProject(
            ProjectUploadRequest request
    ) {

        try {

            String fileName =
                    fileUploadUtil.uploadFile(
                            request.getImage()
                    );

            Project project =
                    Project.builder()
                            .title(request.getTitle())
                            .location(request.getLocation())
                            .description(request.getDescription())
                            .completionDate(
                                    request.getCompletionDate()
                            )
                            .imagePath(fileName)
                            .createdAt(
                                    LocalDateTime.now()
                            )
                            .build();

            Project savedProject =
                    projectRepository.save(
                            project
                    );

            return mapToResponse(
                    savedProject
            );

        } catch (Exception e) {

            throw new RuntimeException(
                    "File Upload Failed"
            );
        }
    }



    public List<Project> getAllProjects() {
        return projectRepository.findAll();
    }

    public Project getProject(Long id) {

        return projectRepository.findById(id)
                .orElseThrow(() ->
                        new ResourceNotFoundException(
                                "Project not found with id : " + id
                        ));
    }

    public ProjectResponse updateProject(
            Long id,
            ProjectUploadRequest request
    ) {

        try {

            Project project = getProject(id);

            project.setTitle(request.getTitle());
            project.setLocation(request.getLocation());
            project.setDescription(request.getDescription());
            project.setCompletionDate(
                    request.getCompletionDate()
            );

            if (request.getImage() != null
                    && !request.getImage().isEmpty()) {

                String fileName =
                        fileUploadUtil.uploadFile(
                                request.getImage()
                        );

                project.setImagePath(fileName);
            }

            Project updatedProject =
                    projectRepository.save(project);

            return mapToResponse(
                    updatedProject
            );

        } catch (Exception e) {

            throw new RuntimeException(
                    "Project Update Failed",
                    e
            );
        }
    }
    public void deleteProject(Long id) {

        Project project = getProject(id);

        projectRepository.delete(project);
    }

    private ProjectResponse mapToResponse(Project project) {

        return ProjectResponse.builder()
                .id(project.getId())
                .title(project.getTitle())
                .location(project.getLocation())
                .description(project.getDescription())
                .completionDate(project.getCompletionDate())
                .imagePath(project.getImagePath())
                .createdAt(project.getCreatedAt())
                .build();
    }
}