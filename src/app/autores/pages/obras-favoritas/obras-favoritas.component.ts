import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ObrasRandom } from '../../interfaces/autores.interface';
import { AutoresService } from '../../services/autores.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-obras-favoritas',
  templateUrl: './obras-favoritas.component.html',
  styleUrls: ['./obras-favoritas.component.css']
})
export class ObrasFavoritasComponent implements OnInit {
  obrasFavoritas: ObrasRandom[] = [];

  constructor(
    private autoresService: AutoresService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!this.authService.isUserLoggedIn()) {
      this.router.navigate(['/autores/login']);
    } else {
      this.obtenerObrasFavoritas();
    }
  }

  obtenerObrasFavoritas() {
    this.obrasFavoritas = this.autoresService.getObrasFavoritas();
  }

  eliminarFavorito(titulo: string) {
    this.autoresService.eliminarObrasFavoritas(titulo);
    this.obtenerObrasFavoritas();
  }
}
