package com.construction.review.service;

import com.construction.review.dto.ReviewRequest;
import com.construction.review.dto.ReviewResponse;
import com.construction.review.entity.Review;
import com.construction.review.repository.ReviewRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ReviewService {

    private final ReviewRepository reviewRepository;

    // Save Review
    public ReviewResponse addReview(
            ReviewRequest request
    ) {

        Review review = Review.builder()
                .clientName(request.getClientName())
                .rating(request.getRating())
                .review(request.getReview())
                .createdAt(LocalDateTime.now())
                .build();

        Review savedReview =
                reviewRepository.save(review);

        return mapToResponse(savedReview);
    }

    // Get All Reviews
    public List<ReviewResponse> getAllReviews() {

        return reviewRepository.findAll()
                .stream()
                .map(this::mapToResponse)
                .collect(Collectors.toList());
    }

    // Delete Review
    public void deleteReview(Long id) {

        Review review = reviewRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException(
                                "Review Not Found"
                        ));

        reviewRepository.delete(review);
    }

    // Convert Entity -> DTO
    private ReviewResponse mapToResponse(
            Review review
    ) {

        return ReviewResponse.builder()
                .id(review.getId())
                .clientName(review.getClientName())
                .rating(review.getRating())
                .review(review.getReview())
                .createdAt(review.getCreatedAt())
                .build();
    }

}