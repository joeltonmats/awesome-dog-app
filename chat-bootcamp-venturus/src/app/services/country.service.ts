import { HttpClient } from '@angular/common/http';
import { City, Country } from './model.service';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';

@Injectable()
export class CountryService {

  private serverUrl = 'http://demo4213404.mockable.io/';

  constructor(
    private http: HttpClient,
  ) { }

  getCountryAll(): Observable<Country[]> {
    const urlGetCountryAll = `${this.serverUrl}/country`;

    return this.http.get<Country[]>(urlGetCountryAll);

  }

  getCityByCountryCode(countryCode: string): Array<City> {

    switch (countryCode) {
      case 'BR':
        return [

        ];
      case 'RS':
        return [
          new City('Moscow', 55.752, 37.616),
          new City('St Petersburg', 59.939, 30.314),
          new City('Novosibirsk', 55.041, 82.935),
          new City('Yekaterinburg', 56.852, 60.612),
          new City('Nizhny Novgorod', 56.329, 44.002)
        ];
      case 'GE':
        return [
          new City('Berlin', 52.524, 13.411),
          new City('Hamburg', 53.575, 10.015),
          new City('Munich', 48.137, 11.575),
          new City('Cologne', 50.933, 6.95),
          new City('Frankfurt', 50.116, 8.684)
        ];
      default:
        return [];
    }

  }

}
