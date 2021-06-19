import { Component, OnInit } from '@angular/core';
import { CovidapiCountryService } from 'src/app/services/covidapi-country.service';

@Component({
  selector: 'app-covid-countrywise',
  templateUrl: './covid-countrywise.component.html',
  styleUrls: ['./covid-countrywise.component.css']
})
export class CovidCountrywiseComponent implements OnInit {
  countries: any = []
  country: any;
  confirmed: any;
  recovered: any;
  death: any;

  constructor(private service: CovidapiCountryService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.service.getAllCountries().subscribe(data => {
      this.countries = data;
    });
  }
  getCountry(c:any) {
    this.country = c;
  }

  getDetails() {
    this.service.getDataCountryWise(this.country).subscribe(data => {
      var index = data.length - 1;
      this.confirmed = data[index].Confirmed;
      this.recovered = data[index].Recovered;
      this.death = data[index].Deaths;
    })
  }




} // end
