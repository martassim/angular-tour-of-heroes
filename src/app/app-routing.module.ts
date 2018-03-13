import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { DashboardComponent }   from './dashboard/dashboard.component';
import { TecnologiasComponent }      from './tecnologias/tecnologias.component';
// import { TecnologiaDetailComponent }  from './tecnologia-detail/tecnologia-detail.component';
 
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  // { path: 'detail/:id', component: TecnologiaDetailComponent },
  { path: 'tecnologias', component: TecnologiasComponent }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}