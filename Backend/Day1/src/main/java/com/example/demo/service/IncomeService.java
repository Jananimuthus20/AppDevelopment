package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Income;
import com.example.demo.repository.IncomeRepository;

@Service
public class IncomeService {
	@Autowired
	private IncomeRepository incomeRepository;
	
	public List<Income>getAllIncome()
	{
		List<Income>li=incomeRepository.findAll();
		return li;
	}
	public Income createIncome(Income income)
	{
		return incomeRepository.save(income);		
	}
	public Optional<Income>getIncomeById(int inc_id)
	{
		return incomeRepository.findById(inc_id);
	}
	public void deleteIncomebyId(int inc_id)
	{
		incomeRepository.deleteById(inc_id);
	}
	public Income updateIncome(Income income)
	{
		return incomeRepository.save(income);
	}

}
