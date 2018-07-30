import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { HttpClientModule } from '@angular/common/http';
import { HerosService } from './../services/heros.service';

import { LayoutModule } from './../layout/layout.module';
import { HerosComponent } from './heros/heros.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    HttpClientModule,
    InfiniteScrollModule
  ],
  declarations: [HerosComponent],
  providers: [
    HerosService
  ],
})
export class PagesModule { }
