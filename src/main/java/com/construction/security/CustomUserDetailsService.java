package com.construction.security;

import com.construction.admin.entity.Admin;
import com.construction.admin.repository.AdminRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.*;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CustomUserDetailsService
        implements UserDetailsService {

    private final AdminRepository adminRepository;

    @Override
    public UserDetails loadUserByUsername(
            String username
    ) throws UsernameNotFoundException {

        Admin admin =
                adminRepository.findByUsername(username)
                        .orElseThrow(() ->
                                new UsernameNotFoundException(
                                        "Admin Not Found"
                                ));

        return new User(
                admin.getUsername(),
                admin.getPassword(),
                List.of(
                        new SimpleGrantedAuthority(
                                "ROLE_ADMIN"
                        )
                )
        );
    }
}