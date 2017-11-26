import { Country } from '../../services/model.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  public countryList: Country[] = [];
  public countrySelected: Country;

  constructor() { }

  ngOnInit() {
    this.countryList.push({ name: 'Brazil', initials: 'BR' });
    this.countryList.push({ name: 'United States', initials: 'USA' });
    this.countryList.push({ name: 'England', initials: 'ENG' });
    this.countrySelected = this.countryList[0];
  }

  public choiceCountry(countrySelected) {
    this.countrySelected = countrySelected;
  }

}
