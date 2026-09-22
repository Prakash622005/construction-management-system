package com.construction.review.dto;

import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ReviewResponse {

    private Long id;

    private String clientName;

    private Integer rating;

    private String review;

    private LocalDateTime createdAt;

}