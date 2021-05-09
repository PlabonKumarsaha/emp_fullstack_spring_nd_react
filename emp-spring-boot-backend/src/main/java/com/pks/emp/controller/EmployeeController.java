package com.pks.emp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pks.emp.model.Employee;
import com.pks.emp.repository.EmployeeRepository;

@CrossOrigin(origins= "http://localhost:3001")
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
	
	//create a emp rest API
	@PostMapping("/employees")
	public Employee createEmployee(@RequestBody Employee employee ) {
		return employeeRepository.save(employee);
	}
	

}
