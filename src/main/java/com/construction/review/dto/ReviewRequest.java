package com.construction.review.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ReviewRequest {

    private String clientName;

    private Integer rating;

    private String review;

}