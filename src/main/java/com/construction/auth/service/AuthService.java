package com.construction.auth.service;

import com.construction.admin.entity.Admin;
import com.construction.admin.repository.AdminRepository;
import com.construction.auth.dto.LoginRequest;
import com.construction.auth.dto.LoginResponse;
import com.construction.security.JwtService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final AdminRepository adminRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;

    public LoginResponse login(LoginRequest request) {

        Admin admin = adminRepository.findByUsername(request.getUsername())
                .orElseThrow(() ->
                        new RuntimeException("Invalid Username or Password"));

        boolean isPasswordValid =
                passwordEncoder.matches(
                        request.getPassword(),
                        admin.getPassword()
                );

        if (!isPasswordValid) {
            throw new RuntimeException("Invalid Username or Password");
        }

        String token =
                jwtService.generateToken(admin.getUsername());

        return LoginResponse.builder()
                .token(token)
                .username(admin.getUsername())
                .message("Login Successful")
                .build();
    }
}