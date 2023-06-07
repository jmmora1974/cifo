import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormUsuariComponent } from './form-usuari.component';
import { HomeComponent } from '../home/home.component';


const routes: Routes = [
  {
    path: '',
    component: FormUsuariComponent
  },
  {
    path: 'home',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormUsuariRoutingModule { }

