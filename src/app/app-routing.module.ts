import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { patch } from '../../node_modules/webdriver-js-extender';

import { LayoutComponent } from './layout/layout.component';
import { HerosComponent } from './pages/heros/heros.component';
import { SeriesComponent } from './pages/series/series.component';
import { EventosComponent } from './pages/eventos/eventos.component';
import { QuadrinhosComponent } from './pages/quadrinhos/quadrinhos.component';

const routes: Routes = [
  { path: '', component: LayoutComponent, children : [
    {path: '', component: HerosComponent},
    {path: 'quadrinhos', component: QuadrinhosComponent},
    {path: 'eventos', component: EventosComponent},
    {path: 'series', component: SeriesComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
