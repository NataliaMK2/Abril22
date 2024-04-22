import { Routes } from '@angular/router';
import { ArticuloComponent } from './articulo/articulo.component';

export const routes: Routes = [
  { path: 'articulo/:id', title: 'Articulo', component: ArticuloComponent },
  { path: 'inmueble', title: 'inmueble', component: ArticuloComponent },
  { path: '', redirectTo: '/inmueble', pathMatch: 'full' }

];
