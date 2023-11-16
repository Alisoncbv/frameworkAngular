import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  claveLocalStorage = 'UsuarioRegistrado';
 // nombre: String='';
  //saludo: String='';
  userEncontrado: Boolean=false;

  constructor(){
  
  }
  
  ngOnInit(): void {
  
  }

  mostrarNombre(){
    //this.saludo = `Bienvenid@ ${this.nombre}`
  }

  formularioInicio=new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    clave: new FormControl('', [Validators.required]),
  });

  

  ingresar(){
    this.userEncontrado=false;
     // Obtener los datos almacenados en el local Storage
     const almacen = localStorage.getItem(this.claveLocalStorage);

     // Parsea los datos (lista vacia si no hay datos)
     const lDatos = almacen ? JSON.parse(almacen) : [];

     console.log(this.formularioInicio.value.nombre);

    // Recorrer todos los elementos en localStorage
for (const usuario of lDatos) {
  
  if(usuario.usuario===this.formularioInicio.value.nombre && usuario.claveUsuario === this.formularioInicio.value.clave){
      this.userEncontrado=true;
  }
}
    if (this.userEncontrado==true) {
      alert("Bienvenido");
      return; // Detener la función si hay campos vacíos
    }else{
      alert("Credenciales invalidas");
      
    }
  }
}

