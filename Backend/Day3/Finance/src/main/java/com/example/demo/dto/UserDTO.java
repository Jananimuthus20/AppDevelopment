package com.example.demo.dto;

public class UserDTO {
	
	private String name;
	private String pass;
	private String email;
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getPass() {
		return pass;
	}
	public void setPass(String pass) {
		this.pass = pass;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public UserDTO(String name, String pass, String email) {
		super();
		this.name = name;
		this.pass = pass;
		this.email = email;
	}
	public UserDTO() {
		super();
	}
	
	

}
