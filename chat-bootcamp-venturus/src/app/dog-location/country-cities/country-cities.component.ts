import { City, CityMarker, Country } from '../../services/model.service';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { MapsAPILoader } from '@agm/core';

@Component({
  selector: 'app-country-cities',
  templateUrl: './country-cities.component.html',
  styleUrls: ['./country-cities.component.css']
})
export class CountryCitiesComponent implements OnInit, OnChanges {

  public title = 'Awesome dogs in ';
  public citiesMarker: CityMarker[] = [];
  public citySelected: City;
  public mapStyle: Array<any>;
  public fitBound: any;

  @Input() country: Country;
  @Input() cities: City[];

  constructor(private mapsAPILoader: MapsAPILoader) {
    this.getMapStyle();
    this.fitBound = {};
  }

  ngOnInit() {
    this.country = new Country('', '');
  }

  ngOnChanges() {
    this.createMarks();
    this.defineBounds();
  }

  public findDogs(marker: CityMarker) {
    this.citySelected = marker.city;
  }

  private createMarks() {
    if (this.cities && this.cities.length > 0) {
      this.citiesMarker = [];
      for (const city of this.cities) {
        const cityMarker = new CityMarker(city, 'map', city.name);
        this.citiesMarker.push(cityMarker);
      }
    }
  }

  private defineBounds() {
    if (this.citiesMarker && this.citiesMarker.length > 0) {
      this.mapsAPILoader.load().then(() => {
        this.fitBound = new window['google'].maps.LatLngBounds();
        this.citiesMarker.forEach((cityMarker: CityMarker) => {
          this.fitBound.extend(new window['google'].maps.LatLng(cityMarker.city.lat, cityMarker.city.lng));
        });
      });
    }
  }



  private getMapStyle() {
    this.mapStyle =
      [
        {
          'stylers': [
            {
              'hue': '#2c3e50'
            },
            {
              'saturation': 250
            }
          ]
        },
        {
          'featureType': 'road',
          'elementType': 'geometry',
          'stylers': [
            {
              'lightness': 50
            },
            {
              'visibility': 'simplified'
            }
          ]
        },
        {
          'featureType': 'road',
          'elementType': 'labels',
          'stylers': [
            {
              'visibility': 'off'
            }
          ]
        }
      ];
  }

}
