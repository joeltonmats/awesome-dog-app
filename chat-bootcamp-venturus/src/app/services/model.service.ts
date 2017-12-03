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

//Dog Classes

export class Dog {
  constructor(
    public name: string,
    public pictures: Array<DocPicture>,
    public profile_picture: DocPicture,
    public favourite_places: Array<DogFavouritePlace>,
    public rating: DogRating
  ) { }
}

export class DocPicture {
  constructor(
    public label: string,
    public url: string
  ) { }
}

export class DogFavouritePlace {
  constructor(
    public name: string,
    public description: string,
    public lat: string,
    public lng: string
  ) { }
}

export class DogRating {
  constructor(
    public qtdLike: number,
    public qtdLove: number
  ) { }
}

//End Dog Classes

export class CityMarker {
  constructor(
    public city: City,
    public map: string = 'map',
    public title: string
  ) { }
}

