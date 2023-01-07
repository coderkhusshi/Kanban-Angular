import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CustomerComponent } from './customer/customer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProjectComponent } from './project/project.component';


const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  
  {path:'customer/registration',component:CustomerComponent},
  {path:'customer/login',component:LoginComponent},
  {path:'about',component:AboutUsComponent},
  {path:'home',component:HomeComponent},
  
  {path:'contactUs',component:ContactUsComponent},
   {path:'customer/login',component:LoginComponent},
 {path:'project',component:ProjectComponent},
 {path:'customer/registration',component:CustomerComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents =[
                               
                                AboutUsComponent,
                                HomeComponent,
                                CustomerComponent,
                                ProjectComponent,
                                ContactUsComponent]

