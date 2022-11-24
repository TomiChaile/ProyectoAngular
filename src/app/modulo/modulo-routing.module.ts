import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { ArgaerolineasComponent } from '../argaerolineas/argaerolineas.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'destinos',
    pathMatch:'full'
  },
  {
    path: 'destinos',
    component: ArgaerolineasComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ModuloRoutingModule { }
