import { Component, Inject, Input, OnInit } from '@angular/core';
import { AutoresService } from '../../services/autores.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Obra, ObrasRandom } from '../../interfaces/autores.interface';



@Component({
  selector: 'app-ver-obras',
  templateUrl: './ver-obras.component.html',
  styleUrls: ['./ver-obras.component.css']
})
export class VerObrasComponent implements OnInit {

  obras: Obra[] = [];
  autor: string = '';
  obrasRandom: ObrasRandom[] = [];
  obrasFavoritas: ObrasRandom[] = [];


  constructor(
    private autoresService: AutoresService,
    public dialogRef: MatDialogRef<VerObrasComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {
    this.autor = this.data;
    this.autoresService.getObras(this.autor)
      .subscribe(obras => {
        this.obras = obras;
        console.log('Obras:', obras);
      });

      this.autoresService.getObrasRandom()
      .subscribe(obrasRandom => {
        this.obrasRandom = obrasRandom;
        console.log('Obras random: ', obrasRandom)
      })
    
  }

  agregarFavorito(autor: string, title: string) {
    const existeTitulo = this.obrasFavoritas.some(obra => obra.title === title);
  
    if (existeTitulo) {
      console.log('El título ya existe en el array');
      return;
    }
  
    const obra: ObrasRandom = {
      title: title,
      author: autor,
    }
  
    this.obrasFavoritas.push(obra);
    this.autoresService.agregarObraFavorita(obra); // Agregar obra al servicio
    console.log('obras Favoritas:', this.obrasFavoritas);
  }

}
