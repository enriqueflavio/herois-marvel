import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { InfosAPI } from './../shared/infosAPI';

@Injectable({
  providedIn: 'root'
})
export class QuadrinhosService {

  offset = 0;

  constructor(private http: HttpClient) { }

  public getComics() {
    return this.http.get(`${InfosAPI.url}/comics?apikey=${InfosAPI.apikey}&hash=${InfosAPI.hashkey}&ts=${InfosAPI.ts}`);
  }

  public getMoreComics() {
    this.offset += 20;
    console.log(this.offset);
    return this.http.get(`${InfosAPI.url}/comics?offset=${this.offset}&apikey=${InfosAPI.apikey}&hash=${InfosAPI.hashkey}&ts=${InfosAPI.ts}`);
  }
  
}
