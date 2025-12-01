import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MinisteriosService } from '../../services/ministerios';

@Component({
  selector: 'app-ministerios',
  imports: [CommonModule],
  templateUrl: './ministerios.html',
  styleUrl: './ministerios.css',
})
export class MinisteriosComponent implements OnInit {
  ministerios: any[] = [];

  constructor(private ministeriosService: MinisteriosService) { }

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
}
