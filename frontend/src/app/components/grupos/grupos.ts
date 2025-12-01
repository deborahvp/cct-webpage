import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GruposService } from '../../services/grupos';

@Component({
  selector: 'app-grupos',
  imports: [CommonModule, FormsModule],
  templateUrl: './grupos.html',
  styleUrl: './grupos.css',
})
export class GruposComponent implements OnInit {
  grupos: any[] = [];
  registroData = {
    nombre: '',
    correo: '',
    telefono: '',
    id_grupo: '',
    comentario: ''
  };
  submitted = false;
  error = '';

  constructor(private gruposService: GruposService) { }

  ngOnInit() {
    this.gruposService.getGrupos().subscribe({
      next: (data) => {
        this.grupos = data;
      },
      error: (err) => {
        console.error('Error al cargar grupos:', err);
      }
    });
  }

  onSubmit() {
    this.gruposService.registrarGrupo(this.registroData).subscribe({
      next: (response) => {
        this.submitted = true;
        this.registroData = { nombre: '', correo: '', telefono: '', id_grupo: '', comentario: '' };
      },
      error: (err) => {
        this.error = 'Error al registrarse en el grupo';
      }
    });
  }
}
