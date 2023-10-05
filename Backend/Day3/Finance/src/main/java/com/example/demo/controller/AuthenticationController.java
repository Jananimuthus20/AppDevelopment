package com.example.demo.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.API.API;
import com.example.demo.requestdto.AuthenticationRequest;
import com.example.demo.requestdto.RegisterRequest;
import com.example.demo.responsedto.AuthenticationResponse;
import com.example.demo.service.AuthenticationService;


import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping(API.AUTH)
@RequiredArgsConstructor
@Tag(name = "Authentication")
public class AuthenticationController {
	  private final AuthenticationService authService;

	    @PostMapping("/register")
	    public ResponseEntity<String> register(@RequestBody RegisterRequest request) {
	        boolean isRegistered = authService.userRegistration(request);
	        return isRegistered ? ResponseEntity.ok("User registered successfully")
	                : ResponseEntity.badRequest().body("Sommething went wrong!");
	    }

	    @PostMapping("/login")
	    public ResponseEntity<AuthenticationResponse> authenticate(@RequestBody AuthenticationRequest request) {
	        return ResponseEntity.ok(authService.userAuthentication(request));
	    }

}
