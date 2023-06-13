import { Component, Input, OnInit } from '@angular/core';
import { Autores } from '../../interfaces/autores.interface';
import { AutoresService } from '../../services/autores.service';
import { MatDialog } from '@angular/material/dialog';
import { VerObrasComponent } from '../../components/ver-obras/ver-obras.component';

@Component({
  selector: 'app-lista-autores',
  templateUrl: './lista-autores.component.html',
  styleUrls: ['./lista-autores.component.css']
})
export class ListaAutoresComponent implements OnInit {

  autores!: string[];
  

  constructor(private autoresService: AutoresService, public dialog: MatDialog) { }

  ngOnInit(): void {

    this.autoresService.getAutores()
      .subscribe(({ authors }) => {
        this.autores = authors;
        console.log(authors);
      })
  }

  openDialog(autor: string) {
    const dialogRef = this.dialog.open(VerObrasComponent, {
      height: '700px',
      width: '1600px',
      data: autor,
    },
    );
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }



}
