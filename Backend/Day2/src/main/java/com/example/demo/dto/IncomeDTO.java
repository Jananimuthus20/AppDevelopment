package com.example.demo.dto;

public class IncomeDTO {

	private int inc_amount;
	private int user_id;
	public int getInc_amount() {
		return inc_amount;
	}
	public void setInc_amount(int inc_amount) {
		this.inc_amount = inc_amount;
	}
	public int getUser_id() {
		return user_id;
	}
	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}
	public IncomeDTO(int inc_amount, int user_id) {
		super();
		this.inc_amount = inc_amount;
		this.user_id = user_id;
	}
	public IncomeDTO() {
		super();
	}
	

}
