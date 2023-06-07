import { Component, Injectable, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { Usuari } from '../../models/usuari';
import { UserServiceService } from '../../services/user-service.service';
import { Router } from '@angular/router';
import {} from './form-usuari.module';

@Component({
  selector: 'app-form-usuari',
  templateUrl: './form-usuari.component.html',
  styleUrls: ['./form-usuari.component.scss']
})
export class FormUsuariComponent implements OnInit  {
  title="Formulari nou usuari"
  usuariForm!:FormGroup;

  public newUsuario:Usuari={
    id: this.userService.getLastId()|0,
    nom: '',
    cognom: '',
    email: ''
  }; 

 
  constructor (private fb: FormBuilder, private userService: UserServiceService, private routes:Router) { }
  ngOnInit (){
    this.createForm();
  }
  createForm():void{
     this.usuariForm = this.fb.group({
      id: new FormControl(this.userService.getLastId()|0),
      nom: new FormControl('',Validators.required),
      cognom: new FormControl('',Validators.required),
      email: new FormControl('',[Validators.required, Validators.email])
    });
  }
  //Agrega l'usuari del formulari is les dades son correctes.
  agregaUsuari ():void {
  this.newUsuario = {
      id: this.usuariForm.get('id')?.value,
      nom:this.usuariForm.get('nom')?.value,
      cognom: this.usuariForm.get('cognom')?.value,
      email: this.usuariForm.get('email')?.value
    };

    if (this.usuariForm.valid){
      this.userService.insertUsuari(this.newUsuario);
    }

    this.routes.navigateByUrl("/");

  }

}
