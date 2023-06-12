import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Autores, ObrasRandom } from '../interfaces/autores.interface';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AutoresService {
  

  obrasFavoritas: ObrasRandom[] = [];
  
  constructor(private http:HttpClient) { }


  getObrasFavoritas(): ObrasRandom[] {
    return this.obrasFavoritas;
  }
  eliminarObrasFavoritas(titulo: string){
    this.obrasFavoritas =this.obrasFavoritas.filter(obra => obra.title !== titulo);
  }

  agregarObraFavorita(obra: ObrasRandom) {
    this.obrasFavoritas.push(obra);
  }

  getAutores(): Observable<Autores>{
    return this.http.get<Autores>('https://poetrydb.org/author');
  }

  getObras(autor: string): Observable<any[]>{
    return this.http.get<any[]>(`https://poetrydb.org/author/${autor}/title`);
  }

  getObrasRandom(): Observable<any[]>{
    return this.http.get<any[]>(`https://poetrydb.org/random/10/author,title.json`);
    
  }
}
