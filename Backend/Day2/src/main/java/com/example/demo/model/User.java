package com.example.demo.model;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table
public class User {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	
	private int user_id;
	private String name;
	private String pass;
	private String email;
	//Expense
	
	@OneToMany(cascade=CascadeType.ALL)
	@JoinColumn(name="user_id",referencedColumnName="user_id")

	
	private List<Expense> e;
	public List<Expense> getE() {
		return e;
	}
	public void setE(List<Expense> e) {
		this.e = e;
	}
	
	//Income
	@OneToMany(cascade=CascadeType.ALL)
	@JoinColumn(name="user_id",referencedColumnName="user_id")
	
	private List<Income> i;
	public List<Income> getI() {
		return i;
	}
	public void setI(List<Income> i) {
		this.i = i;
	}
	
	public int getUser_id() {
		return user_id;
	}
	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}
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
	public User(int user_id, String name, String pass,String email) {
		super();
		this.user_id = user_id;
		this.name = name;
		this.pass = pass;
		this.email=email;
	}
	public User() {
		super();
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	

}
