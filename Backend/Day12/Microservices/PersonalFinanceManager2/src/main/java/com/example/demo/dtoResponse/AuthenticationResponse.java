package com.example.demo.dtoResponse;

import com.example.demo.role.Role;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AuthenticationResponse {
	private String token;
    private Long uid;
    private String email;
    private Role role;
}
