package com.example.demo.requestdto;

import com.examole.demo.role.Roles;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data

public class UserRequest {
	 private String name;
	    private String email;
	    private String password;
	    private Boolean isEnabled;
	    private Roles role;

}
