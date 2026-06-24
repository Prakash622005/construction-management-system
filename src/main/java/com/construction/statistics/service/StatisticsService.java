package com.construction.statistics.service;

import com.construction.statistics.entity.CompanyStatistics;
import com.construction.statistics.repository.CompanyStatisticsRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class StatisticsService {

    private final CompanyStatisticsRepository repository;

    public CompanyStatistics getStatistics() {

        return repository.findAll()
                .stream()
                .findFirst()
                .orElseGet(() -> {

                    CompanyStatistics stats =
                            new CompanyStatistics();

                    stats.setYearsExperience(0);
                    stats.setProjectsCompleted(0);
                    stats.setHappyClients(0);

                    return repository.save(stats);
                });
    }

    public CompanyStatistics updateStatistics(
            CompanyStatistics request
    ) {

        CompanyStatistics existing =
                getStatistics();

        existing.setYearsExperience(
                request.getYearsExperience()
        );

        existing.setProjectsCompleted(
                request.getProjectsCompleted()
        );

        existing.setHappyClients(
                request.getHappyClients()
        );

        return repository.save(existing);
    }
}