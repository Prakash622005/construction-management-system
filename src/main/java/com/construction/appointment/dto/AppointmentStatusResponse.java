package com.construction.appointment.dto;

import lombok.Builder;
import lombok.Data;

import java.time.LocalDate;
import java.time.LocalTime;

@Data
@Builder
public class AppointmentStatusResponse {

    private String appointmentId;

    private String status;

    private LocalDate meetingDate;

    private LocalTime meetingTime;
}