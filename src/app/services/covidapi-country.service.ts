import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CovidapiCountryService {

  constructor(private _http:HttpClient) { }

  getAllCountries():Observable<any>{
    const url = "https://api.covid19api.com/countries";
    return this._http.get(url);
  }
getDataCountryWise(country:any):Observable<any>{
  const url1 = "https://api.covid19api.com/dayone/country/"+country;
  return this._http.get(url1);
}

} //end tag
