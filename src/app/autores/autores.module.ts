import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoresRoutingModule } from './autores-routing.module';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { ListaAutoresComponent } from './pages/lista-autores/lista-autores.component';
import { ObrasFavoritasComponent } from './pages/obras-favoritas/obras-favoritas.component';
import { HomeComponent } from './pages/home/home.component';
import { VerObrasComponent } from './components/ver-obras/ver-obras.component';



@NgModule({
  declarations: [
    LoginComponent,
    ListaAutoresComponent,
    ObrasFavoritasComponent,
    HomeComponent,
    VerObrasComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    AutoresRoutingModule,
    MaterialModule,
    FormsModule,
  ]
})
export class AutoresModule { }
