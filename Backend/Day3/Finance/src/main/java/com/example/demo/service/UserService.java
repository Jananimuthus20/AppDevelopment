package com.example.demo.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.examole.demo.role.Roles;
import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;
import com.example.demo.requestdto.UserRequest;
import com.example.demo.responsedto.UserResponse;


@Service
public class UserService {
	@Autowired
	private UserRepository userRepository;
	
	 public List<UserResponse> getAllUsers() {
	        List<User> userList = userRepository.findAll();
	        return userList.stream()
	                .filter(user -> !user.getRole().equals(Roles.ADMIN))
	                .map(this::mapUserToUserResponse)
	                .collect(Collectors.toList());
	    }
	 
	  public UserResponse getUser(long uid) {
	        User u = userRepository.findByUid(uid);
	        return mapUserToUserResponse(u);
	    }
	  
	  public UserResponse updateUser(UserRequest request, long uid) {
	        User user = userRepository.findByUid(uid);
	        User newUser = new User();
	        if (user != null) {
	            newUser = User.builder()
	                    .name(request.getName())
	                    .email(request.getEmail())
	                    .password(request.getPassword())
	                    .role(request.getRole())
	                    .isEnabled(request.getIsEnabled())
	                    .build();
	            userRepository.save(newUser);
	        }
	        return mapUserToUserResponse(newUser);
	    }
	  
	  public boolean deleteuser(long uid)
	  {
		   userRepository.deleteAll();
		   return true;
	  }
	  private UserResponse mapUserToUserResponse(User user) {
	        return UserResponse.builder()
	                .uid(user.getUid())
	                .name(user.getName())
	                .email(user.getEmail())
	                .role(user.getRole())
	                .isEnabled(user.getIsEnabled())
	                .build();
	    }
	  
	  

}
