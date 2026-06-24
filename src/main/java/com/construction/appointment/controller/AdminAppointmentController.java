package com.construction.appointment.controller;

import com.construction.appointment.dto.ConfirmAppointmentRequest;
import com.construction.appointment.entity.Appointment;
import com.construction.appointment.service.AppointmentService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import com.construction.appointment.dto.AppointmentResponse;

import java.util.List;

@RestController
@RequestMapping("/api/admin/appointments")
@RequiredArgsConstructor
@CrossOrigin("*")
public class AdminAppointmentController {

    private final AppointmentService appointmentService;

    @GetMapping
    public List<Appointment> getAllAppointments() {
        return appointmentService.getAllAppointments();
    }

    @GetMapping("/{id}")
    public Appointment getAppointment(@PathVariable Long id) {
        return appointmentService.getAppointment(id);
    }

    @PutMapping("/{id}/confirm")
    public String confirmAppointment(
            @PathVariable Long id,
            @RequestBody ConfirmAppointmentRequest request
    ) {
        appointmentService.confirmAppointment(id, request);
        return "Appointment Confirmed Successfully";
    }
    @PutMapping("/{id}/reject")
    public AppointmentResponse rejectAppointment(
            @PathVariable Long id
    ) {

        return appointmentService
                .rejectAppointment(id);
    }
    @DeleteMapping("/{id}")
    public String deleteAppointment(
            @PathVariable Long id
    ) {

        appointmentService
                .deleteAppointment(id);

        return "Appointment Deleted Successfully";
    }
}