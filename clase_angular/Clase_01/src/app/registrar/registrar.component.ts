import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent {

  claveLocalStorage = 'UsuarioRegistrado';

  formularioRegistrar = new FormGroup({
    documentoUsuario: new FormControl('', [Validators.required]),
    nombreUsuario: new FormControl('', [Validators.required]),
    usuario: new FormControl('', [Validators.required]),
    claveUsuario: new FormControl('', [Validators.required]),
    telefonoUsuario: new FormControl('', [Validators.required]),
    emailUsuario: new FormControl('', [Validators.required, Validators.email]),
     })

  registrar(){
    if (this.formularioRegistrar.valid){
      alert("Registro correcto");

       // Obtener los datos almacenados en el local Storage
      const almacen = localStorage.getItem(this.claveLocalStorage);

      // Parsea los datos (lista vacia si no hay datos)
      const lDatos = almacen ? JSON.parse(almacen) : [];

      // Agrega los datos a la lista
      lDatos.push(this.formularioRegistrar.value);

      // Guarda la lista en el local storage
      localStorage.setItem(this.claveLocalStorage, JSON.stringify(lDatos));
    
      this.formularioRegistrar.reset();
    }else{
      alert("Campos vacios");
  }
  }

}


