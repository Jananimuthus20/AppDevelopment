package com.example.demo.model;

import java.sql.Date;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="income")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Income {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int incId;
	private int incAmount;
	private String incCategory;

	
}
