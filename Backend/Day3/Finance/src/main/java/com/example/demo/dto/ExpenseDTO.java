package com.example.demo.dto;

import java.sql.Date;

public class ExpenseDTO {
	
	private Date date;
	private int exp_amount;
	private String category;
	private int user_id;
	
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	public int getExp_amount() {
		return exp_amount;
	}
	public void setExp_amount(int exp_amount) {
		this.exp_amount = exp_amount;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public int getUser_id() {
		return user_id;
	}
	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}
	
	public ExpenseDTO(Date date, int exp_amount, String category,int user_id) {
		super();
		this.date = date;
		this.exp_amount = exp_amount;
		this.category = category;
		this.user_id = user_id;
	}
	public ExpenseDTO() {
		super();
	}
	
	

}
