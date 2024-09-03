import { Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { DetailComponent } from './components/detail/detail.component';
import { AddrecipeComponent } from './components/addrecipe/addrecipe.component';

export const routes: Routes = [
  {path: '', redirectTo: '/recipes', pathMatch: 'full'},
  {path: 'recipes', component: ListComponent},
  {path: 'recipes/:id', component: DetailComponent},
  {path: 'addrecipe', component:AddrecipeComponent}
];

