import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { InfosAPI } from './../shared/infosAPI';

@Injectable({
  providedIn: 'root'
})
export class HerosService {

  constructor(private http: HttpClient) { }

  public getHero() {
    return this.http.get(`${InfosAPI.url}/characters?apikey=${InfosAPI.apikey}&hash=${InfosAPI.hashkey}&ts=${InfosAPI.ts}`);
  }
}
