package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Expense;
import com.example.demo.repository.ExpenseRepository;

@Service
public class ExpenseService {
	@Autowired
	private ExpenseRepository expenseRepo;
	
	public List<Expense> getExpense(){
		 List<Expense> li= expenseRepo.findAll();
		 return li;
	}
	public Expense addExpense(Expense exp)
	{
		return expenseRepo.save(exp);
	}
	
	public Optional<Expense> getExpenseById(int exp_id)
	{
		return expenseRepo.findById(exp_id);
	}
	public void deleteExpenseById(int exp_id)
	{
		 expenseRepo.deleteById(exp_id);
	}
	public Expense updateExpense(Expense exp)
	{
		return expenseRepo.save(exp);
	}

}
