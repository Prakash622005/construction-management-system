package com.construction.review.repository;

import com.construction.review.entity.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReviewRepository
        extends JpaRepository<Review, Long> {
}