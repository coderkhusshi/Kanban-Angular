import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { customer } from './customer';


@Injectable({
  providedIn: 'root'
})
export class LoginuserService {

  constructor(private http: HttpClient) { }
  validateCustomer(cust:customer):Observable<customer>{
    return this.http.post<customer>("http://localhost:8081/KanbanApp/customer/custId",cust);
  }

  addCustomer(cust:customer):Observable<customer>{
 
    return this.http.post<customer>("http://localhost:8081/KanbanApp/customer", cust);
  }
  
  showcustomer():Observable<customer[]>{
    // the result of get function. get fun will give you Observable<Customer[]>
    return this.http.get<customer[]>("http://localhost:8081/KanbanApp/customer");
  }

}
