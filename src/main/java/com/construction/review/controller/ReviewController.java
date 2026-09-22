package com.construction.review.controller;

import com.construction.review.dto.ReviewRequest;
import com.construction.review.dto.ReviewResponse;
import com.construction.review.service.ReviewService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
@CrossOrigin("*")
public class ReviewController {

    private final ReviewService reviewService;

    // Client Submit Review
    @PostMapping("/reviews")
    public ReviewResponse addReview(
            @RequestBody ReviewRequest request
    ) {

        return reviewService.addReview(request);
    }

    // Client View Reviews
    @GetMapping("/reviews")
    public List<ReviewResponse> getAllReviews() {

        return reviewService.getAllReviews();
    }

    // Admin Delete Review
    @DeleteMapping("/admin/reviews/{id}")
    public String deleteReview(
            @PathVariable Long id
    ) {

        reviewService.deleteReview(id);

        return "Review Deleted Successfully";
    }

}