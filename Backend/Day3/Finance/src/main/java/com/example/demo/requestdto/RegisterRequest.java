package com.example.demo.requestdto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data

public class RegisterRequest {
	 private String name;
	    private String email;
	    private String password;
	    private String role;

}
