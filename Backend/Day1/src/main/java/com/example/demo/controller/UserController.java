package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.User;
import com.example.demo.service.UserService;

import io.swagger.v3.oas.annotations.tags.Tag;

@RestController
@Tag(name="User Details",description="get all the details of the users")
public class UserController {
	@Autowired
	private UserService userService;
	@PostMapping("/createuser")
	public ResponseEntity<User> createuser(@RequestBody User user)
	{
		User usr=userService.saveUser(user);
		return ResponseEntity.ok(usr);
	}
	

}
