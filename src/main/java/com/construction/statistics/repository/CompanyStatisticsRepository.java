package com.construction.statistics.repository;

import com.construction.statistics.entity.CompanyStatistics;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CompanyStatisticsRepository
        extends JpaRepository<CompanyStatistics, Long> {
}