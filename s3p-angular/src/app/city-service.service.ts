import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { City } from './city';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CityServiceService {

  private citiesUrl: string;

  constructor(private http: HttpClient) {
    this.citiesUrl = 'http://localhost:8080/cities';
  }

  public findAll(): Observable<City[]> {
    return this.http.get<City[]>(this.citiesUrl);
  }

  public save(city: City) {
    return this.http.post<City>(this.citiesUrl, city);
  }

}
