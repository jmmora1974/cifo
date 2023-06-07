import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormUsuariRoutingModule } from './form-usuari.routing.module';
import { FormUsuariComponent } from './form-usuari.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    FormUsuariRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [FormUsuariComponent],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    
  ]
  
})
export class FormUsuariModule { }
