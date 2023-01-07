package com.cgg.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cgg.exception.CustomerNotFoundException;

import com.cgg.entity.Customer;
import com.cgg.repository.CustomerRepository;


@Service
public class CustomerServiceImpl implements CustomerService{

	
	@Autowired
	CustomerRepository customerrepo;

	@Transactional
	@Override
	public List<Customer> showcustomer() {
		// TODO Auto-generated method stub
		return customerrepo.findAll();
	}
    
	@Transactional
	@Override
	public Customer addCustomer(Customer customer) {
		Optional<Customer> custObj = customerrepo.findById(customer.getCustomerId());
		
		return customerrepo.saveAndFlush(customer);
	}
	
	

	@Transactional
	@Override
	public Customer updateCustomer(Customer customer) {
		// TODO Auto-generated method stub
		Optional<Customer> previousCustomer = customerrepo.findById(customer.getCustomerId());
		Customer customerupdate = previousCustomer.get();
		
		customerupdate.setUsername(customer.getUsername());
		customerupdate.setPassword(customer.getPassword());
		customerupdate.setAddress(customer.getAddress());
		customerupdate.setMobileNumber(customer.getMobileNumber());
		customerupdate.setEmail(customer.getEmail());
		return customerupdate;
	}

	@Override
	public void deleteById(int customerId) {
		// TODO Auto-generated method stub
		Optional<Customer> cust = customerrepo.findById(customerId);
		customerrepo.deleteById(customerId);
		
	}
	
	@Transactional
	@Override
	public Customer validateCustomer(Customer customer) throws CustomerNotFoundException{
	
		Customer cust = customerrepo.validateCustomer(customer.getUsername(),customer.getPassword());
		if (cust == null) 
		{
			throw new CustomerNotFoundException("User with this username and password does not exists");
		}
		return customerrepo.validateCustomer(customer.getUsername(),customer.getPassword());
	}
}
