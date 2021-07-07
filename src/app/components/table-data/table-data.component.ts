import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as fromApp from '../../store/app.reducer';
import * as CountryActions from '../../store/country/country.actions';
import * as RegionActions from '../../store/region/region.actions';
import { CountryData, RegionData } from '../../store/model/appData.model';

@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.scss'],
})
export class TableDataComponent implements OnInit {
  countryData!: Observable<CountryData>;
  regionData!: Observable<RegionData>;

  public countryGraphData: CountryData = {
    cases: [],
    deaths: [],
    recovered: [],
  };
  public regionGraphData: RegionData = {
    regions: Object,
    cases: [],
    deaths: [],
    recovered: [],
  };

  public durations = [
    { day: 7, value: 'Last 1 week' },
    { day: 14, value: 'Last 2 week' },
    { day: 21, value: 'Last 3 week' },
    { day: 28, value: 'Last 4 week' },
  ];
  public selectedDays: number = 28;
  public selectedRegion: string = 'all';

  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit(): void {
    this.getCountryData(this.selectedDays);
    this.getStateNames();
  }

  getCountryData(days: number): void {
    this.store.dispatch(new CountryActions.GetCases({ days }));
    this.store.dispatch(new CountryActions.GetRecoveredNumbers({ days }));
    this.store.dispatch(new CountryActions.GetDeathNumbers({ days }));
    this.countryData = this.store.select('country').pipe(
      map((countryState) => {
        this.countryGraphData = countryState.countryData;
        return countryState.countryData;
      })
    );
  }

  // --------------States----------------------
  getStateNames() {
    this.store.dispatch(new RegionActions.GetRegions());

    this.regionData = this.store.select('region').pipe(
      map((regionState) => {
        return regionState.regionData;
      })
    );
  }

  getStatesData(region: string, days: number) {
    this.store.dispatch(new RegionActions.GetCases({ region, days }));
    this.store.dispatch(new RegionActions.GetDeathNumbers({ region, days }));
    this.store.dispatch(
      new RegionActions.GetRecoveredNumbers({ region, days })
    );
    this.regionData = this.store.select('region').pipe(
      map((regionState) => {
        this.regionGraphData = regionState.regionData;

        return regionState.regionData;
      })
    );
  }

  // ----------------Common---------------------------
  sendTableData() {
    return this.selectedRegion === 'all' ? this.countryData : this.regionData;
  }
  sendGraphData() {
    return this.selectedRegion === 'all'
      ? this.countryGraphData
      : this.regionGraphData;
  }

  changeRegion(value: string) {
    this.selectedRegion = value;
    this.selectedRegion === 'all'
      ? this.getCountryData(this.selectedDays)
      : this.getStatesData(this.selectedRegion, this.selectedDays);
  }

  changeDuration(value: number) {
    this.selectedDays = value;
    this.selectedRegion === 'all'
      ? this.getCountryData(this.selectedDays)
      : this.getStatesData(this.selectedRegion, this.selectedDays);
  }
}
