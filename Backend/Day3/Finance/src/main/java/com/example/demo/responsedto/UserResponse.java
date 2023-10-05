package com.example.demo.responsedto;

import com.examole.demo.role.Roles;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data

public class UserResponse {
	private long uid;
	 private String name;
	    private String email;
	    private String password;
	    private Boolean isEnabled;
	    private Roles role;

}
