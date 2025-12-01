import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactoService } from '../../services/contacto';

@Component({
  selector: 'app-contacto',
  imports: [CommonModule, FormsModule],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css',
})
export class ContactoComponent {
  formData = {
    nombre: '',
    correo: '',
    asunto: '',
    mensaje: ''
  };
  submitted = false;
  error = '';

  constructor(private contactoService: ContactoService) { }

  onSubmit() {
    this.contactoService.enviarMensaje(this.formData).subscribe({
      next: (response) => {
        this.submitted = true;
        this.formData = { nombre: '', correo: '', asunto: '', mensaje: '' };
      },
      error: (err) => {
        this.error = 'Error al enviar el mensaje';
      }
    });
  }
}
