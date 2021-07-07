import { ActionReducerMap } from '@ngrx/store';
import * as fromCountry from './country/country.reducer';
import * as fromRegion from './region/region.reducer';

export interface AppState {
  readonly country: fromCountry.AppState;
  readonly region: fromRegion.AppState;
}

export const appReducer: ActionReducerMap<AppState, any> = {
  country: fromCountry.countryReducer,
  region: fromRegion.regionReducer,
};
