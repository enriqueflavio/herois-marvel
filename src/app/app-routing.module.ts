import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { patch } from '../../node_modules/webdriver-js-extender';

import { LayoutComponent } from './layout/layout.component';
import { HerosComponent } from './pages/heros/heros.component';

const routes: Routes = [
  { path: '', component: LayoutComponent, children: [
    {path: 'herois', component: HerosComponent},
    {path: 'quadrinhos', component: HerosComponent},
    {path: 'eventos', component: HerosComponent},
    {path: 'series', component: HerosComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
