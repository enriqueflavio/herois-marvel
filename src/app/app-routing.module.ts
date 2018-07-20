import { LayoutComponent } from './layout/layout.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { patch } from '../../node_modules/webdriver-js-extender';

const routes: Routes = [
  { path: '', component: LayoutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
