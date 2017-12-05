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
        this.countryList = res['country'];
        this.countrySelected = this.countryList[0];
      });
  }

  public choiceCountry(countrySelected: Country) {
    this.countrySelected = countrySelected;
    this.citiesFromCountry = this._countryService.getCityByCountryCode(countrySelected.code);
  }
}
