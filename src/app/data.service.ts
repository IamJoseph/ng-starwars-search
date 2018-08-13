import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getCharacters(key: string) {
    return this.http.get(`https://swapi.co/api/people/?search=${key}`);
  }
}
