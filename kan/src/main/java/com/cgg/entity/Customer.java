package com.cgg.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="User-login")
public class Customer {
		@Id 
		@GeneratedValue(strategy=GenerationType.AUTO)
		private int customerId;
		
		@Column(name="Username")
		private String username;
		
		@Column(name="Password")
		private String password;
		
		@Column(name="Address")
		private String address;
		
		@Column(name="MobileNumber")
		private int mobileNumber;
		
		@Column(name="Email")
		private String email;
		


		public int getCustomerId() {
			return customerId;
		}


		public void setCustomerId(int customerId) {
			this.customerId = customerId;
		}


		public String getUsername() {
			return username;
		}


		public void setUsername(String username) {
			this.username = username;
		}


		public String getPassword() {
			return password;
		}


		public void setPassword(String password) {
			this.password = password;
		}
		
		public String getAddress() {
			return address;
		}


		public void setAddress(String address) {
			this.address = address;
		}


		public int getMobileNumber() {
			return mobileNumber;
		}


		public void setMobileNumber(int mobileNumber) {
			this.mobileNumber = mobileNumber;
		}


		public String getEmail() {
			return email;
		}


		public void setEmail(String email) {
			this.email = email;
		}
		

}
