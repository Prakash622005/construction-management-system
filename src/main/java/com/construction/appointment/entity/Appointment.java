package com.construction.appointment.entity;

import com.construction.enums.AppointmentStatus;
import jakarta.persistence.*;
import lombok.*;
//import com.construction.enums.AppointmentStatus;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;

@Entity
@Table(name = "appointments")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Appointment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true)
    private String appointmentId;

    private String clientName;

    private String mobile;

    private String email;

    private String constructionType;

    private String siteSize;

    private String siteLocation;

    @Column(columnDefinition = "TEXT")
    private String requirements;

//    private String status;

    @Enumerated(EnumType.STRING)
    private AppointmentStatus status;

    private LocalDate meetingDate;

    private LocalTime meetingTime;

    private LocalDateTime createdAt;
}