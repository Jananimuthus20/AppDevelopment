package com.example.demo.service;

import java.util.Optional;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.examole.demo.role.Roles;
import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;
import com.example.demo.requestdto.AuthenticationRequest;
import com.example.demo.requestdto.RegisterRequest;
import com.example.demo.responsedto.AuthenticationResponse;
import com.example.demo.util.JWTUtil;


import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class AuthenticationService {
	 private final UserRepository userRepository;
	    private final PasswordEncoder passwordEncoder;
	    private final AuthenticationManager authenticationManager;
	    private final JWTUtil jwtUtil;
	    

	    public boolean userRegistration(RegisterRequest request) {
	        Optional<User> isUserExists = userRepository.findByEmail(request.getEmail());
	        if (!isUserExists.isPresent()) {
	            var user = User.builder()
	                    .name(request.getName())
	                    .email(request.getEmail())
	                    .password(passwordEncoder.encode(request.getPassword()))
	                    .isEnabled(true)
	                    .role(Roles.valueOf(request.getRole().toUpperCase()))
	                    .build();
	            userRepository.save(user);
	            return true;
	        } else {
	            return false;
	        }
	    }

	    public AuthenticationResponse userAuthentication(AuthenticationRequest request) {
	        authenticationManager.authenticate(
	                new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
	        var user = userRepository.findByEmail(request.getEmail()).orElseThrow();
	        var token = jwtUtil.generateToken(user);
	        return AuthenticationResponse.builder()
	                .token(token)
	                .uid(user.getUid())
	                .build();
	    }


}
