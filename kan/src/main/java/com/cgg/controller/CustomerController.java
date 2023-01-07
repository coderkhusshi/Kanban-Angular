package com.cgg.controller;

import java.util.Iterator;
import java.util.List;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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

import com.cgg.exception.CustomerNotFoundException;

import com.cgg.entity.Customer;
import com.cgg.service.CustomerService;

@RestController
@CrossOrigin
@RequestMapping(path="/customer")

public class CustomerController {

	
	@Autowired
	private CustomerService customerService;
	
	@GetMapping(produces = "application/json")
	public List<Customer> showcustomer(){
		List<Customer> customerList = customerService.showcustomer();
		@SuppressWarnings("unused")
		Iterator<Customer> customer = customerList.iterator();
		return customerList;
	}
	
	@PostMapping(consumes = "application/json", produces = "application/json")
	ResponseEntity<Customer> addCustomer( @RequestBody Customer customer)  
	{
		Customer cust = customerService.addCustomer(customer);
		
		return ResponseEntity.ok(customer);
	}
	
	
	@PutMapping(consumes = "application/json", produces = "application/json")
	ResponseEntity<Customer> updateKanban(@RequestBody Customer customer) {
		Customer cut = customerService.updateCustomer(customer);
		return new ResponseEntity<Customer>(customer, HttpStatus.ACCEPTED);
	}
	
	@SuppressWarnings({"rawtypes", "unchecked"})
	@DeleteMapping("/{customerId}")
	ResponseEntity dele(@PathVariable("customerId") int customerId)  {
		customerService.deleteById(customerId);
		return new ResponseEntity("Customer with ID" + customerId + "is deleted", HttpStatus.OK);
	}
	
	@PostMapping(path = "/custId", consumes = "application/json", produces = "application/json")
	ResponseEntity<Customer> validateCustomer(@RequestBody Customer customer)throws  CustomerNotFoundException
	{
		Customer cust = customerService.validateCustomer(customer);
		if (cust == null)
		{
			throw new CustomerNotFoundException("User with username and password not available!");
		}
		return new ResponseEntity<Customer>(cust, HttpStatus.OK);
	}
}
