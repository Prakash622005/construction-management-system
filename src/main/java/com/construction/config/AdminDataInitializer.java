package com.construction.config;

import com.construction.admin.entity.Admin;
import com.construction.admin.repository.AdminRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class AdminDataInitializer implements CommandLineRunner {

    private final AdminRepository adminRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public void run(String... args) {

        if (adminRepository.findByUsername("admin").isEmpty()) {

            Admin admin = Admin.builder()
                    .username("admin")
                    .password(passwordEncoder.encode("admin123"))
                    .build();

            adminRepository.save(admin);

            System.out.println("================================");
            System.out.println("Default Admin Created");
            System.out.println("Username : admin");
            System.out.println("Password : admin123");
            System.out.println("================================");
        }
    }
}