import { Component, OnInit } from '@angular/core';
import { ObrasRandom } from '../../interfaces/autores.interface';
import { AutoresService } from '../../services/autores.service';

@Component({
  selector: 'app-obras-favoritas',
  templateUrl: './obras-favoritas.component.html',
  styleUrls: ['./obras-favoritas.component.css']
})
export class ObrasFavoritasComponent implements OnInit {
  obrasFavoritas: ObrasRandom[] = [];

  constructor(private autoresService: AutoresService) {}

  ngOnInit(): void {
    this.obtenerObrasFavoritas();
  }

  obtenerObrasFavoritas() {
    this.obrasFavoritas = this.autoresService.getObrasFavoritas();
  }

  eliminarFavorito(titulo: string) {
    this.autoresService.eliminarObrasFavoritas(titulo);
    this.obtenerObrasFavoritas();
  }
}
