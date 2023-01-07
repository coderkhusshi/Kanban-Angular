package com.cgg.service;

import java.util.List;

import com.cgg.exception.CustomerNotFoundException;
import com.cgg.entity.Customer;

public interface CustomerService {

	void deleteById(int customerId);

	List<Customer> showcustomer();
	Customer addCustomer(Customer customer);
	

	Customer updateCustomer(Customer customer);



	Customer validateCustomer(Customer customer) throws CustomerNotFoundException;;

}
