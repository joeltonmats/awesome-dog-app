import { CountryService } from '../../services/country.service';
import { Country, City } from '../../services/model.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  public countryList: Country[] = [];
  public countrySelected: Country;
  public citiesFromCountry: Array<City>;

  constructor(private _countryService: CountryService) { }

  ngOnInit() {
    this._countryService.getCountryAll()
      .subscribe(res => {

        this.countryList = res;
        this.countrySelected = this.countryList[0];
        this.choiceCountry(this.countrySelected);
      });
  }

  public choiceCountry(countrySelected: Country) {
    this.countrySelected = countrySelected;
    this._countryService.getCityByCountryCode(countrySelected.code)
      .subscribe(res => {
        this.citiesFromCountry = res;
      }, err => {
        console.log(err);
      });
  }
}
