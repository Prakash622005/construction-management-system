package com.construction.statistics.controller;

import com.construction.statistics.entity.CompanyStatistics;
import com.construction.statistics.repository.CompanyStatisticsRepository;
import com.construction.statistics.service.StatisticsService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/statistics")
@RequiredArgsConstructor
@CrossOrigin("*")
public class CompanyStatisticsController {

    private final StatisticsService statisticsService;

    @GetMapping
    public CompanyStatistics getStatistics() {

        return statisticsService.getStatistics();
    }

    @PutMapping
    public CompanyStatistics updateStatistics(
            @RequestBody CompanyStatistics statistics
    ) {

        return statisticsService
                .updateStatistics(statistics);
    }
}