import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomerComponent } from './customer.component';


@NgModule({
  declarations: [CustomerComponent],
  imports: [CommonModule,ReactiveFormsModule],
  exports: [CustomerComponent]
})
export class CustomerModule { }