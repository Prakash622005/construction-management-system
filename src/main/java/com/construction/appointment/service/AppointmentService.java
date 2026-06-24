package com.construction.appointment.service;

import com.construction.appointment.dto.*;
import com.construction.appointment.entity.Appointment;
import com.construction.appointment.repository.AppointmentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import com.construction.enums.AppointmentStatus;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Random;

@Service
@RequiredArgsConstructor
public class AppointmentService {

    private final AppointmentRepository appointmentRepository;

    public AppointmentResponse createAppointment(AppointmentRequest request) {

        String appointmentId =
                "APT" + (1000 + new Random().nextInt(9000));

        Appointment appointment = Appointment.builder()
                .appointmentId(appointmentId)
                .clientName(request.getClientName())
                .mobile(request.getMobile())
                .email(request.getEmail())
                .constructionType(request.getConstructionType())
                .siteSize(request.getSiteSize())
                .siteLocation(request.getSiteLocation())
                .requirements(request.getRequirements())
                .status(AppointmentStatus.PENDING)
                .createdAt(LocalDateTime.now())
                .build();

        appointmentRepository.save(appointment);

        return AppointmentResponse.builder()
                .appointmentId(appointmentId)
                .status("PENDING")
                .build();
    }

    public List<Appointment> getAllAppointments() {
        return appointmentRepository.findAll();
    }

    public Appointment getAppointment(Long id) {
        return appointmentRepository.findById(id)
                .orElseThrow();
    }

    public AppointmentStatusResponse getStatus(String appointmentId) {
        Appointment appointment =
                appointmentRepository.findByAppointmentId(appointmentId)
                        .orElseThrow();

        return AppointmentStatusResponse.builder()
                .appointmentId(appointment.getAppointmentId())
                .status(appointment.getStatus().name())
                .meetingDate(appointment.getMeetingDate())
                .meetingTime(appointment.getMeetingTime())
                .build();
    }

    public void confirmAppointment(
            Long id,
            ConfirmAppointmentRequest request
    ) {

        Appointment appointment =
                appointmentRepository.findById(id)
                        .orElseThrow();

        appointment.setStatus(
                AppointmentStatus.CONFIRMED
        );

        appointment.setMeetingDate(
                request.getMeetingDate()
        );

        appointment.setMeetingTime(
                request.getMeetingTime()
        );

        appointmentRepository.save(
                appointment
        );
    }

    public AppointmentResponse rejectAppointment(
            Long id
    ) {

        Appointment appointment =
                appointmentRepository
                        .findById(id)
                        .orElseThrow(() ->
                                new RuntimeException(
                                        "Appointment Not Found"
                                ));

        appointment.setStatus(
                AppointmentStatus.CANCELLED
        );

        Appointment saved =
                appointmentRepository.save(
                        appointment
                );

        return mapToResponse(saved);
    }
    public void deleteAppointment(
            Long id
    ) {

        Appointment appointment =
                appointmentRepository
                        .findById(id)
                        .orElseThrow(() ->
                                new RuntimeException(
                                        "Appointment Not Found"
                                ));

        appointmentRepository.delete(
                appointment
        );
    }
    private AppointmentResponse mapToResponse(
            Appointment appointment
    ) {

        return AppointmentResponse.builder()
                .appointmentId(
                        appointment.getAppointmentId()
                )
                .status(
                        appointment.getStatus().name()
                )
                .build();
    }
}