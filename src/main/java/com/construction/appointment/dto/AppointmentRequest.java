package com.construction.appointment.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class AppointmentRequest {

    @NotBlank
    private String clientName;

    @NotBlank
    private String mobile;

    @Email
    private String email;

    @NotBlank
    private String constructionType;

    @NotBlank
    private String siteSize;

    @NotBlank
    private String siteLocation;

    private String requirements;
}