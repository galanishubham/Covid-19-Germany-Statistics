import { Injectable } from '@angular/core';

import * as CountryActions from './country.actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';

import { CountryService } from '../../services/country/country.service';

@Injectable()
export class CountryEffects {
  constructor(
    private actions$: Actions,
    private countryService: CountryService
  ) {}

  fetchCountryCases = createEffect(() =>
    this.actions$.pipe(
      ofType(CountryActions.CountryCasesTypes.GET_CASES),
      map((action: CountryActions.GetCases) => action.payload),
      switchMap((payload) => this.countryService.getCountryCases(payload.days)),
      map((cases) => {
        return new CountryActions.GetCasesSuccess({
          cases: cases.data,
        });
      })
    )
  );

  fetchCountryDeaths = createEffect(() =>
    this.actions$.pipe(
      ofType(CountryActions.CountryCasesTypes.GET_DEATH_NUMBERS),
      map((action: CountryActions.GetDeathNumbers) => action.payload),
      switchMap((payload) =>
        this.countryService.getCountryDeaths(payload.days)
      ),
      map((deaths) => {
        return new CountryActions.GetDeathsNumbersSuccess({
          deaths: deaths.data,
        });
      })
    )
  );

  fetchCountryRecovered = createEffect(() =>
    this.actions$.pipe(
      ofType(CountryActions.CountryCasesTypes.GET_RECOVERED_NUMBERS),
      map((action: CountryActions.GetRecoveredNumbers) => action.payload),
      switchMap((payload) =>
        this.countryService.getCountryRecovered(payload.days)
      ),
      map((recovered) => {
        return new CountryActions.GetRecoveredNumbersSuccess({
          recovered: recovered.data,
        });
      })
    )
  );
}
