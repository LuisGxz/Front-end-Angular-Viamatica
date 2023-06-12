import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Autores } from '../interfaces/autores.interface';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AutoresService {
  

  
  constructor(private http:HttpClient) { }

  getAutores(): Observable<Autores>{
    return this.http.get<Autores>('https://poetrydb.org/author');
  }

  getObras(autor: string): Observable<any[]>{
    return this.http.get<any[]>(`https://poetrydb.org/author/${autor}/title`);
  }
}
