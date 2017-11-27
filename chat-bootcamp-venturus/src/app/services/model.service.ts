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

