import { Country } from '../services/model.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dog-location',
  templateUrl: './dog-location.component.html',
  styleUrls: ['./dog-location.component.css']
})
export class DogLocationComponent implements OnInit {
  public country: Country;

  constructor() { }

  ngOnInit() {
  }

}
