package com.construction.appointment.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@AllArgsConstructor
public class AppointmentResponse {

    private String appointmentId;

    private String status;
}