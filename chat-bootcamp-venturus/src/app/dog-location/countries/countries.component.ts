import { CountryService } from '../../services/country.service';
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

  constructor(private _countryService: CountryService) { }

  ngOnInit() {
    this._countryService.getCountryAll()
      .subscribe(res => {
        console.log(res);
        this.countryList = res["geonames"];
        this.countrySelected = this.countryList[0];
      }
  }

  public choiceCountry(countrySelected) {
    this.countrySelected = countrySelected;
  }

}
