import { Injectable } from '@angular/core';
import { Usuari } from '../models/usuari';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor() { }

  //Obté la llista d'usuaris del localstorage i retorna la llita en array d'usuaris.
  getUsuaris():Usuari[]{
    const usuaris1=localStorage.getItem("usuaris");
    const llistaUsuaris=JSON.parse(usuaris1!);
    return llistaUsuaris;
  }
  //Inserta en nou usuari en localstorage. Retona la llista complerta d'usuaris.
  insertUsuari (usuari: Usuari): Usuari[]{
   
   let usuaris:Usuari[]=this.getUsuaris()?this.getUsuaris():[];
   
   usuaris.push(usuari!);
   localStorage.setItem("usuaris",JSON.stringify(usuaris));
   
   return  usuaris;
  }

  //Obtenim el Id de l'últim registre.
  getLastId ():number{
    let lastIdUser: number;
    const usuaris2:Usuari[]= this.getUsuaris();
    
    if (usuaris2 &&usuaris2.length>0){
      let lastUser:Usuari=usuaris2[usuaris2.length-1];
      lastIdUser=lastUser.id;
    } else {
      lastIdUser=0;
    }
    
   return lastIdUser+1;
  }
  //Borra l'usuari de la llista.
  removeUsusari (usuari: Usuari){
    let usuaris:Usuari[]=this.getUsuaris()?this.getUsuaris():[];
    usuaris=usuaris.filter(user=>user.id!=usuari.id);
    localStorage.setItem("usuaris",JSON.stringify(usuaris));
    return usuaris;
  }
  //Borra la llista complerta d'
  removeAllUsers() : void{
    localStorage.clear();
    console.log ("Llista usuaris borrada.");
    
  }
  //Actulitza l'usuari
  updateUser(user:Usuari){
    let trobat=false;
    
    let usuaris:Usuari[]=this.getUsuaris()?this.getUsuaris():[];
    for (let i=0; i<usuaris.length;i++)  {
      if (usuaris[i].id===user.id){
          console.log ("Usuari trobat ", user);
          usuaris[i]=user;
          trobat=true;

      }
    }
    if (trobat){
      localStorage.setItem("usuaris",JSON.stringify(usuaris));
    } else {
      console.log ("Usuari a modificar no trobat.");
    }
  
  }
}
