package com.pks.emp.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "employees")
public class Employee {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	@Column(name ="first_name")
	private String firstName;
	@Column(name ="last_name")
	private String lastName;
	@Column(name ="email_id")
	private String email_ID;
	
	public Employee() {
		
		
	}
	public Employee(long id, String firstName, String lastName, String email_ID) {
		super();
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email_ID = email_ID;
	}
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getEmail_ID() {
		return email_ID;
	}
	public void setEmail_ID(String email_ID) {
		this.email_ID = email_ID;
	}
	
	
	
}
