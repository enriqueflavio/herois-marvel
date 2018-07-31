import { HttpClient } from '@angular/common/http';
import { InfosAPI } from './../shared/infosAPI';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  offset = 0;

  constructor(private http: HttpClient) { }

  public getEventos() {
    return this.http.get(`${InfosAPI.url}/series?apikey=${InfosAPI.apikey}&hash=${InfosAPI.hashkey}&ts=${InfosAPI.ts}`);
  }

  public getMoreEventos() {
    this.offset += 20;
    console.log(this.offset);
    return this.http.get(`${InfosAPI.url}/series?offset=${this.offset}&apikey=${InfosAPI.apikey}&hash=${InfosAPI.hashkey}&ts=${InfosAPI.ts}`);
  }

}
