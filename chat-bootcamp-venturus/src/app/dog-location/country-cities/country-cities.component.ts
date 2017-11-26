import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-country-cities',
  templateUrl: './country-cities.component.html',
  styleUrls: ['./country-cities.component.css']
})
export class CountryCitiesComponent implements OnInit {

  title: string = 'My first AGM project';
  lat: number = 51.678418;
  lng: number = 7.809007;


  constructor() { }

  ngOnInit() { }

}
