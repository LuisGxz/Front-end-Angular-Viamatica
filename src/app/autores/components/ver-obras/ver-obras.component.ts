import { Component, Inject, Input, OnInit } from '@angular/core';
import { AutoresService } from '../../services/autores.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

interface Obra {
  title: string;
}

@Component({
  selector: 'app-ver-obras',
  templateUrl: './ver-obras.component.html',
  styleUrls: ['./ver-obras.component.css']
})
export class VerObrasComponent implements OnInit {

  obras: Obra[] = [];
  autor: string = '';

  constructor(
    private autoresService: AutoresService,
    public dialogRef: MatDialogRef<VerObrasComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    this.autor = this.data;
    this.autoresService.getObras(this.autor)
      .subscribe(obras => {
        this.obras = obras;
        console.log('Obras:', obras);
      });
  }

}
