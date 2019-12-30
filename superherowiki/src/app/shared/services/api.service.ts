import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hero } from '../interfaces/hero';
import { map, tap, filter, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  readonly BASE_URL = 'https://www.superheroapi.com/api.php/2637297456359062/search/';

  constructor(
    private http: HttpClient
  ) { }

  getHero(name: string): Observable<Hero> {
    const url = `${this.BASE_URL}${name}`;
    return this.http.get<Hero>(url);
  }

}
