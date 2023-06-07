import { Component,Inject, OnInit } from '@angular/core';
import { Usuari } from '../../models/usuari';
import { UserServiceService } from 'src/app/services/user-service.service';
import {MatDialogRef,MatDialog, MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';


import {MatButtonModule, } from '@angular/material/button';
//import {ModalComponent} from './modal/modal.component'
//import { HomeRoutingModule } from './home.routing.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor (private userService:UserServiceService, private dialog: MatDialog){
    
  }
  title = 'Practica 3 Reactive Form Usuarios';
usuaris: Usuari[]=this.userService.getUsuaris();
displayedColumns: string[] = ['id', 'nom', 'cognom', 'email'];
  dataSource = this.usuaris;
ngOnInit(): void {
  
}
//Borra la llista d'usuaris
borraListaUsuarios(){
  this.usuaris=[];
  this.userService.removeAllUsers();
  
}
//Borra l'usuari especificat
borraUsuari(usuari:Usuari){
  this.usuaris=this.userService.removeUsusari (usuari);
  
}
//Obre dialeg per modificar les dades de l'usuari.
abredialogo(usuari:Usuari) {
  
  const dialogRef = this.dialog.open(ModalComponentint, {
    data: {
      id: usuari.id,
      nom: usuari.nom,
      cognom: usuari.cognom,
      email: usuari.email
    }
  });
  //Actualitcem la llista d'usuaris despres de la modificacio.
  dialogRef.afterClosed().subscribe(result => { 
      this.usuaris=this.userService.getUsuaris();  
  });
  
  
}

}

//Afegim el componet modal per a fer les modificacions.
@Component({
  selector: 'app-modalint',
  templateUrl: './modal/modal.component.html',
  standalone: true,
  imports: [MatDialogModule,MatButtonModule, FormsModule, ReactiveFormsModule],
  styleUrls: ['./modal/modal.component.scss'],
  
})
export class ModalComponentint {
  usuariForm!:FormGroup;

  public newUsuario:Usuari={
    id: this.data.id,
    nom: this.data.nom,
    cognom: this.data.cognom,
    email: this.data.email
  }; 

  constructor(
    public dialogRef: MatDialogRef<ModalComponentint>,
    @Inject(MAT_DIALOG_DATA) public data: Usuari,
    private fb: FormBuilder,
    private userService: UserServiceService
    ) 
    {}
    ngOnInit (){
      this.createForm();
    }
    //Creem el formulari amd les dades de l'usuari a modificar.
    createForm():void{
       this.usuariForm = this.fb.group({
        id: new FormControl(this.data.id),
        nom: new FormControl(this.data.nom,Validators.required),
        cognom: new FormControl(this.data.cognom,Validators.required),
        email: new FormControl(this.data.email,[Validators.required, Validators.email])
      });
    }
    //Si no hi han canvis, tanca el dialeg.
    onNoClick(): void {
      this.dialogRef.close();
      console.log(" No hi han canvis en la modificacio.");
    }

    //actualitza l'usuari amb les noves dades.
    actualitzaUsuari(user: Usuari):void{
      console.log("User", user);
      this.newUsuario = {
        id: this.usuariForm.get('id')?.value,
        nom:this.usuariForm.get('nom')?.value,
        cognom: this.usuariForm.get('cognom')?.value,
        email: this.usuariForm.get('email')?.value
      };
  
      if (this.usuariForm.valid){
        this.userService.updateUser(this.newUsuario);
      }
    }
}




