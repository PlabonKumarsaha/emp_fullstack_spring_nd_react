package com.pks.emp.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pks.emp.exception.ResourceNotFoundException;
import com.pks.emp.model.Employee;
import com.pks.emp.repository.EmployeeRepository;

@CrossOrigin(origins= "http://localhost:3000")
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
	
	//get emp by id
	@GetMapping("/employees/{id}")
	public ResponseEntity<Employee> getEmployeeById(@PathVariable Long id) {
		Employee emp = employeeRepository.findById(id)
				.orElseThrow(()-> new ResourceNotFoundException("No such employee exists"));
		return ResponseEntity.ok(emp);
	}
	
	// update emp rest API
	@PutMapping("/employees/{id}")
	public ResponseEntity<Employee> updateEmployeeById(@PathVariable Long id,@RequestBody Employee updatedEmployee){
		Employee emp = employeeRepository.findById(id)
				.orElseThrow(()-> new ResourceNotFoundException("No such employee exists"));
		emp.setFirstName(updatedEmployee.getFirstName());
		emp.setLastName(updatedEmployee.getLastName());
		emp.setEmail_ID(updatedEmployee.getEmail_ID());
		Employee updated = employeeRepository.save(emp);
		return ResponseEntity.ok(updated);
	}
	// delete emp rest API
	@DeleteMapping("/employees/{id}")
	public ResponseEntity<Map<String,Boolean>>deleteEmp(@PathVariable Long id){
		Employee emp = employeeRepository.findById(id)
				.orElseThrow(()-> new ResourceNotFoundException("No such employee exists"));
		employeeRepository.delete(emp);
		Map<String, Boolean>response = new HashMap<>();
		response.put("deleted",Boolean.TRUE);
		return ResponseEntity.ok(response);
		
	}
	

}
