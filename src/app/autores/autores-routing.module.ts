import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListaAutoresComponent } from './pages/lista-autores/lista-autores.component';
import { LoginComponent } from '../auth/login/login.component';
import { ObrasFavoritasComponent } from './pages/obras-favoritas/obras-favoritas.component';

const routes: Routes =[
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'listado',
        component: ListaAutoresComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'favoritos',
        component: ObrasFavoritasComponent
      },
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AutoresRoutingModule { }
