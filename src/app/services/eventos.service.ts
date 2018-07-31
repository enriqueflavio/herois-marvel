import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { InfosAPI } from './../shared/infosAPI';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  offset = 0;

  constructor(private http: HttpClient) { }

  public getEventos() {
    return this.http.get(`${InfosAPI.url}/events?apikey=${InfosAPI.apikey}&hash=${InfosAPI.hashkey}&ts=${InfosAPI.ts}`);
  }

  public getMoreEventos() {
    this.offset += 20;
    console.log(this.offset);
    return this.http.get(`${InfosAPI.url}/events?offset=${this.offset}&apikey=${InfosAPI.apikey}&hash=${InfosAPI.hashkey}&ts=${InfosAPI.ts}`);
  }

}
