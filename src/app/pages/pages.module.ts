import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutModule } from './../layout/layout.module';
import { HerosComponent } from './heros/heros.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutModule
  ],
  declarations: [HerosComponent]
})
export class PagesModule { }
