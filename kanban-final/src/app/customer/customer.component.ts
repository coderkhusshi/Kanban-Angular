import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { customer } from '../customer';
import { LoginuserService } from '../loginuser.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customerForm: FormGroup | any;
  customers: customer[] | any;
 
   custId: number | any;
 

  constructor(private fb: FormBuilder, private router: Router, private service: LoginuserService) { }

  ngOnInit() {
    this.customerForm = this.fb.group({
      customerId: [''],
      username: ['', Validators.required],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(12)
      ]],
      address: ['', Validators.required],
      mobileNumber: ['', [
        Validators.required,
        Validators.pattern("[6-9]{1}[0-9]{2}[0-9]{4}[0-9]{3}"),
        Validators.minLength(10),
        Validators.maxLength(10)
      ]],
      email: ['', [
        Validators.required,
        Validators.email
      ]],
    

    });

  }
  login($event:any) {
    this.router.navigate(['/customer/login']);
  }
   saveCustomer(): void {
     let cust: any = this.customerForm.value;
    alert(JSON.stringify(cust));
  

      
      this.service.addCustomer(cust)
        .subscribe(data => {
          alert("Customer with Id " + data.customerId + " is created");
          this.router.navigate(['/customer/login']);
          this.service.showcustomer().subscribe(custs => {
            this.customers = custs;
          });
        },
        err=>alert("Customer Already exist"));
    }



  }
