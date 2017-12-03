import { City, CityMarker, Country } from '../../services/model.service';
import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-country-cities',
  templateUrl: './country-cities.component.html',
  styleUrls: ['./country-cities.component.css']
})
export class CountryCitiesComponent implements OnInit, OnChanges {

  title: string = 'Cuty dogs in ';
  lat: number = 51.678418;
  lng: number = 7.809007;
  @Input() country: Country;
  @Input() cities: City[];

  public citiesMarker: CityMarker[] = [];
  public citySelected: City;


  constructor() { }

  ngOnInit() {
    this.country = new Country('', '');
  }

  ngOnChanges() {
    console.log("Change cities", this.cities ? this.cities[0] : null);
    this.createMarks();
  }

  private createMarks() {
    if (this.cities && this.cities.length > 0) {
      for (let city of this.cities) {
        let cityMarker = new CityMarker(city, 'map', city.name);
        this.citiesMarker.push(cityMarker);
      }
    }
  }

}
