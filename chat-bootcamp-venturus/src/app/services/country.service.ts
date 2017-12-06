import { HttpClient } from '@angular/common/http';
import { City, Country } from './model.service';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';

@Injectable()
export class CountryService {

  private serverUrl = 'https://awesome-dog-api.herokuapp.com';

  constructor(
    private http: HttpClient,
  ) { }

  getCountryAll(): Observable<Country[]> {
    const urlGetCountryAll = `${this.serverUrl}/country`;

    return this.http.get<Country[]>(urlGetCountryAll);

  }

  getCityByCountryCode(countryCode: string): Observable<City[]> {
    const urlGetCitiesByCountryCode = `${this.serverUrl}/cities?country_code=${countryCode}`;

    return this.http.get<City[]>(urlGetCitiesByCountryCode);

  }

}
