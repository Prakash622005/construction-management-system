package com.construction.admin.service;

import com.construction.admin.entity.Admin;
import com.construction.admin.repository.AdminRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AdminService {

    private final AdminRepository adminRepository;

    public Optional<Admin> findByUsername(String username) {
        return adminRepository.findByUsername(username);
    }

    public Admin save(Admin admin) {
        return adminRepository.save(admin);
    }

    public boolean existsByUsername(String username) {
        return adminRepository.findByUsername(username).isPresent();
    }
}