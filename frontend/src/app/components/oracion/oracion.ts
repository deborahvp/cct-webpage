import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OracionService } from '../../services/oracion';
import { MinisteriosService } from '../../services/ministerios';

@Component({
  selector: 'app-oracion',
  imports: [CommonModule, FormsModule],
  templateUrl: './oracion.html',
  styleUrl: './oracion.css',
})
export class OracionComponent implements OnInit {
  ministerios: any[] = [];
  formData = {
    nombre: '',
    correo: '',
    telefono: '',
    motivo: '',
    desea_ser_contactado: false,
    id_ministerio: ''
  };
  submitted = false;
  error = '';

  constructor(
    private oracionService: OracionService,
    private ministeriosService: MinisteriosService
  ) { }

  ngOnInit() {
    this.ministeriosService.getMinisterios().subscribe({
      next: (data) => {
        this.ministerios = data;
      },
      error: (err) => {
        console.error('Error al cargar ministerios:', err);
      }
    });
  }

  onSubmit() {
    this.oracionService.enviarSolicitud(this.formData).subscribe({
      next: (response) => {
        this.submitted = true;
        this.formData = { nombre: '', correo: '', telefono: '', motivo: '', desea_ser_contactado: false, id_ministerio: '' };
      },
      error: (err) => {
        this.error = 'Error al enviar la petición';
      }
    });
  }
}
