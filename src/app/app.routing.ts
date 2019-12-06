import {RouterModule, Routes} from '@angular/router';
import {FlowerTableComponent} from './flower-table/flower-table.component';
import {FlowerDetailsComponent} from './flower-details/flower-details.component';

const appRoutes: Routes = [
  {path: 'flowers', component: FlowerTableComponent},
  {path: 'flowers/:id', component: FlowerDetailsComponent},
  {path: '', redirectTo: 'flowers', pathMatch: 'full'},
  {path: '**', redirectTo: 'flowers'}
] ;

export const routing = RouterModule.forRoot(appRoutes);

