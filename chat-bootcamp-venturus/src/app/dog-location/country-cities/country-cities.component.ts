import { Country } from '../../services/model.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-country-cities',
  templateUrl: './country-cities.component.html',
  styleUrls: ['./country-cities.component.css']
})
export class CountryCitiesComponent implements OnInit {

  title: string = 'Cities in ';
  lat: number = 51.678418;
  lng: number = 7.809007;
  @Input() country: Country


  constructor() { }

  ngOnInit() {
    this.country = new Country('', '');
  }



}
