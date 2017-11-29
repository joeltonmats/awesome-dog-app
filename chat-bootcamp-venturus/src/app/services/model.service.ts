import { Injectable } from '@angular/core';

@Injectable()
export class Country2 {

  constructor(
    public name: string,
    public initials: string
  ) { }

}

export class Country {

  constructor(
    public countryName: string,
    public countryCode: string
  ) { }

}

export class City {
  constructor(
    public name: string,
    public lng: string,
    public lat: string
  ) { }
}

export class CityMarker {
  constructor(
    public city: City,
    public map: string = 'map',
    public title: string
  ) { }
}

