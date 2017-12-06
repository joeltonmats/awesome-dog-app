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
    public name: string,
    public code: string
  ) { }

}

export class City {
  constructor(
    public name: string,
    public lat: number,
    public lng: number
  ) { }
}

//Dog Classes

export class Dog {
  constructor(
    public name: string,
    public pictures: Array<DogPicture>,
    public profile_picture: DogPicture,
    public favourite_places: Array<DogFavouritePlace>,
    public rating: DogRating
  ) { }
}

export class DogPicture {
  constructor(
    public src: string,
    public caption: string
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

