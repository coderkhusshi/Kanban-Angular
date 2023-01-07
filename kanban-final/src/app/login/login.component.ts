import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { customer } from '../customer';
import { LoginuserService } from '../loginuser.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  cust:customer=new customer();

  constructor(private loginuserservice: LoginuserService, private router:Router) { }

  ngOnInit(): void {
  }
validateCustomer(){
  console.log(this.cust);

  this.loginuserservice.validateCustomer(this.cust).subscribe(data=>{
    alert("Login Successsfully")
    sessionStorage.setItem("loggedIn","customerlogin");
        sessionStorage.setItem("customerId",data.customerId.toString());
        this.router.navigate(['/project']);
  },error=>alert("Sorry Please enter correct userId and Password"));
  }
}


