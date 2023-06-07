import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FormUsuariComponent } from './pages/form-usuari/form-usuari.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent

  },
  {
    path: 'formUser',
    component: FormUsuariComponent
 } ,
 {
  path: '',
  redirectTo: '/home', 
  pathMatch: 'full'
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
