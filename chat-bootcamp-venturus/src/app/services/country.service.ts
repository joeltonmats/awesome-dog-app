import { HttpClient } from '@angular/common/http';
import { Country } from './model.service';
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

}
