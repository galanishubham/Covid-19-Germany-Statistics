import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  HttpResCases,
  HttpResDeaths,
  HttpResRecovered,
  HttpResStateNames,
} from 'src/app/store/model/appData.model';

@Injectable({
  providedIn: 'root',
})
export class RegionService {
  private REGION_URL = 'https://api.corona-zahlen.org/states/';

  constructor(private http: HttpClient) {}

  getRegionNames() {
    return this.http.get<HttpResStateNames>(`${this.REGION_URL}`);
  }

  getRegionCases(region: string, days: number) {
    return this.http.get<HttpResCases>(
      `${this.REGION_URL}${region}/history/cases/${days}`
    );
  }

  getRegionDeaths(region: string, days: number) {
    return this.http.get<HttpResDeaths>(
      `${this.REGION_URL}${region}/history/deaths/${days}`
    );
  }

  getRegionRecovered(region: string, days: number) {
    return this.http.get<HttpResRecovered>(
      `${this.REGION_URL}${region}/history/recovered/${days}`
    );
  }
}
