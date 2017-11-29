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
  public citiesFromCountry: City;

  constructor(private _countryService: CountryService) { }

  ngOnInit() {
    this._countryService.getCountryAll()
      .subscribe(res => {
        console.log(res);
        this.countryList = res["geonames"];
        this.countrySelected = this.countryList[0];
      })
  }

  public choiceCountry(countrySelected: Country) {
    this.countrySelected = countrySelected;

    this._countryService.getCityByCountryCode(countrySelected.countryCode)
      .subscribe(res => {
        this.citiesFromCountry = res["geonames"];;
      })
  }

}
