import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContianerLayoutComponent } from './layout/contianer-layout/contianer-layout.component';


const routes: Routes = [
  {
    path: 'homepage',
    component: ContianerLayoutComponent
  },
  {
    path: '',
    component: ContianerLayoutComponent
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
