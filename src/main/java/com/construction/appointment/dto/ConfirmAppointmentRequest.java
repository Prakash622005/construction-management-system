package com.construction.appointment.dto;

import lombok.Data;

import java.time.LocalDate;
import java.time.LocalTime;

@Data
public class ConfirmAppointmentRequest {

    private LocalDate meetingDate;

    private LocalTime meetingTime;
}