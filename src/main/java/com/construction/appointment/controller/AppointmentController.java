package com.construction.appointment.controller;

import com.construction.appointment.dto.AppointmentRequest;
import com.construction.appointment.dto.AppointmentResponse;
import com.construction.appointment.dto.AppointmentStatusResponse;
import com.construction.appointment.service.AppointmentService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/appointments")
@RequiredArgsConstructor
@CrossOrigin("*")
public class AppointmentController {

    private final AppointmentService appointmentService;

    @PostMapping
    public AppointmentResponse createAppointment(
            @Valid @RequestBody AppointmentRequest request
    ) {
        return appointmentService.createAppointment(request);
    }

    @GetMapping("/status/{appointmentId}")
    public AppointmentStatusResponse getStatus(
            @PathVariable String appointmentId
    ) {
        return appointmentService.getStatus(appointmentId);
    }
}