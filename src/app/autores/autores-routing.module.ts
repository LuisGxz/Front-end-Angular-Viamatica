import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListaAutoresComponent } from './pages/lista-autores/lista-autores.component';
import { ObrasFavoritasComponent } from './pages/obras-favoritas/obras-favoritas.component';
import { LoginComponent } from './pages/login/login.component';

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
        component: LoginComponent,
      },
      {
        path: 'favoritos',
        component: ObrasFavoritasComponent
      },
      {
        path: '**',
        component: HomeComponent
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AutoresRoutingModule { }
