import { HttpClient } from '@angular/common/http';
import { City, Country } from './model.service';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';

@Injectable()
export class CountryService {

  private serverUrl = "http://api.geonames.org/";
  private userName = "";

  constructor(
    private http: HttpClient,
  ) { }

  getCountryAll(): Observable<Country[]> {
    const urlGetCountryAll = `${this.serverUrl}/countryInfoJSON?formatted=true&username=${this.userName}&style=full`;

    return this.http.get<Country[]>(urlGetCountryAll);

  }

  getCityByCountryCode(countryCode: string): Observable<City[]> {
    const urlGetCityByCountryCode = `${this.serverUrl}citiesJSON?north=44.1&south=-9.9&east=-22.4&west=55.2&username=${this.userName}&countrycode=${countryCode}`;

    return this.http.get<City[]>(urlGetCityByCountryCode);
  }

}
