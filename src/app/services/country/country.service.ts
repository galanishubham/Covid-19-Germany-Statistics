import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  HttpResCases,
  HttpResDeaths,
  HttpResRecovered,
} from '../../store/model/appData.model';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private COUNTRY_URL = 'https://api.corona-zahlen.org/germany/history/';

  constructor(private http: HttpClient) {}

  getCountryCases(days: number) {
    return this.http.get<HttpResCases>(`${this.COUNTRY_URL}cases/${days}`);
  }

  getCountryDeaths(days: number) {
    return this.http.get<HttpResDeaths>(`${this.COUNTRY_URL}deaths/${days}`);
  }

  getCountryRecovered(days: number) {
    return this.http.get<HttpResRecovered>(
      `${this.COUNTRY_URL}recovered/${days}`
    );
  }
}
