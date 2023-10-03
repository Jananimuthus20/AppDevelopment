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

import com.example.demo.model.Income;
import com.example.demo.service.IncomeService;

import io.swagger.v3.oas.annotations.tags.Tag;

@RestController
@RequestMapping("/incomes")
@Tag(name="Income Details",description="get all the income details")
public class IncomeController {
	@Autowired
	private IncomeService incomeService;
	
	@GetMapping("getAllIncomes")
	public List<Income>getAllIncome()
	{
		List<Income>li=incomeService.getAllIncome();
		return li;
	}
	@PostMapping("saveIncome")
	public  ResponseEntity<Income> createIncome(@RequestBody Income income)
	{
		Income inc= incomeService.createIncome(income);
		return ResponseEntity.ok(inc);
	}
	@GetMapping("getIncome/{id}")
	public ResponseEntity<Optional<Income>>getIncomeById(final @PathVariable int id)
	{
		Optional<Income>income_id=incomeService.getIncomeById(id);
		return ResponseEntity.ok(income_id);
	}
	@DeleteMapping("deleteIncome/{id}")
	public void deleteIncomeById(@PathVariable int id)
	{
		incomeService.deleteIncomebyId(id);
	}
	@PutMapping("updateIncome")
	public ResponseEntity<Income>updateIncome(@RequestBody Income income)
	{
		Income update=incomeService.updateIncome(income);
		return ResponseEntity.ok(update);
	}

}
