package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.API.API;
import com.example.demo.requestdto.UserRequest;
import com.example.demo.responsedto.UserResponse;
import com.example.demo.service.UserService;

import io.swagger.v3.oas.annotations.tags.Tag;

@RestController
@Tag(name="User Details",description="get all the details of the users")
@RequestMapping(API.USER)
public class UserController {
	@Autowired
	private UserService userService;
	
	 @GetMapping("/all")
	    public ResponseEntity<List<UserResponse>> getAllUsers() {
	        List<UserResponse> userList = userService.getAllUsers();
	        return !userList.isEmpty() ? ResponseEntity.ok().body(userList) : ResponseEntity.noContent().build();
	    }

	    @GetMapping("/{uid}")
	    public ResponseEntity<UserResponse> getUser(@PathVariable long uid) {
	        UserResponse userResponse = userService.getUser(uid);
	        return userResponse != null ? ResponseEntity.ok().body(userResponse) : ResponseEntity.notFound().build();
	    }

	    @PutMapping("/update/{uid}")
	    public ResponseEntity<UserResponse> updateUser(@RequestBody UserRequest request, @PathVariable long uid) {
	        UserResponse userResponse = userService.updateUser(request, uid);
	        return userResponse != null ? ResponseEntity.ok().body(userResponse) : ResponseEntity.notFound().build();
	    }
	    @DeleteMapping("/delete/{id}")
	    public ResponseEntity<String> deleteUser(@PathVariable long uid) {
	        boolean isDeleted = userService.deleteuser(uid);
	        return isDeleted ? ResponseEntity.ok().body("User deleted successfully!")
	                : ResponseEntity.notFound().build();
	    }
	    

	
	

}
