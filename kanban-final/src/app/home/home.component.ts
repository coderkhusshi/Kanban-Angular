import { Component, OnInit } from '@angular/core';
import { Route, Router, RouterLink, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ProjectComponent } from '../project/project.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  project($event:any){
    let loginStatus=sessionStorage.getItem("loggedIn");
    if(loginStatus==null){
     this.router.navigate(['/customer/login']);
    }
    else{
     sessionStorage.setItem("type",$event.target.value);
     this.router.navigate(['/project']);
    }
   }
}
