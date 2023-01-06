import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  nombre;
  apellido;
  email;
  telefono;
  formularioEnviado = false;
  constructor() {
    this.nombre = '';
    this.apellido = '';
    this.email = '';
    this.telefono = '';
   }

  ngOnInit(): void {
  }
  enviarFormulario(): void {
    // Valida si todos los campos del formulario han sido rellenados
    if (this.nombre && this.apellido && this.email && this.telefono) {
      // Si todos los campos han sido rellenados, envia el formulario
      this.formularioEnviado = true;
      // Aquí debes poner el código necesario para enviar el formulario, por ejemplo, hacer una petición HTTP
    } else {
      // Si algún campo está vacío, muestra un mensaje de error
      alert('Todos los campos son obligatorios');
    }
  }
}
