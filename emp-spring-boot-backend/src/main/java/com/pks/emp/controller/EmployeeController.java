package com.pks.emp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pks.emp.model.Employee;
import com.pks.emp.repository.EmployeeRepository;


@RestController
@RequestMapping("/api/v1/")
public class EmployeeController {
	
	@Autowired
	private EmployeeRepository employeeRepository;
	
	// get all the emp
	@GetMapping("/employees")
	public List<Employee> getAllemp(){
		return employeeRepository.findAll();
	}

}
