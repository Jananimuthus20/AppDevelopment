package com.example.demo.controller;


import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.model.Expense;
import com.example.demo.service.ExpenseService;

import io.swagger.v3.oas.annotations.tags.Tag;

@RestController
@RequestMapping("/expenses")
@Tag(name="Expense Details",description="get all the details of the expense")
public class ExpenseController {
	@Autowired
	private ExpenseService expenseService;
	
	@GetMapping("getallExpenses")
	
	public List<Expense>getExpense()
	{
		return expenseService.getExpense();
	}
		@PostMapping("/saveExpense")
	public ResponseEntity<Expense>addExpense(@RequestBody Expense exp)
	{
		Expense add=expenseService.addExpense(exp);
		return ResponseEntity.ok(add);
	}
	@GetMapping("getExpense/{id}")
	public ResponseEntity<Optional<Expense>> getExpenseById(final @PathVariable int id)
	{
		Optional<Expense> createdStudent=expenseService.getExpenseById(id);
		return ResponseEntity.ok(createdStudent);
	}
	@DeleteMapping("deleteExpense/{id}")
	public void deleteExpenseById(@PathVariable int id)
	{
		 expenseService.deleteExpenseById(id);
	}
	@PutMapping("/updateExpense")
	public ResponseEntity<Expense> update(@RequestBody Expense exp)
	{
		final Expense update=expenseService.updateExpense(exp);
		return ResponseEntity.ok(update);
	}

}
