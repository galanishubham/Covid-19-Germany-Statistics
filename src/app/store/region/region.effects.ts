import { Injectable } from '@angular/core';

import * as RegionActions from './region.actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { RegionService } from 'src/app/services/region/region.service';

@Injectable()
export class RegionEffects {
  constructor(
    private actions$: Actions,
    private regionService: RegionService
  ) {}

  fetchRegionNames = createEffect(() =>
    this.actions$.pipe(
      ofType(RegionActions.RegionCasesTypes.GET_REGIONS),
      switchMap(() => this.regionService.getRegionNames()),
      map((regions) => {
        return new RegionActions.GetRegionsSuccess({
          regions: Object.values(regions.data),
        });
      })
    )
  );

  fetchRegionCases = createEffect(() =>
    this.actions$.pipe(
      ofType(RegionActions.RegionCasesTypes.GET_CASES),
      map((action: RegionActions.GetCases) => action.payload),
      switchMap((payload) =>
        this.regionService.getRegionCases(payload.region, payload.days)
      ),
      map((cases) => {
        return new RegionActions.GetCasesSuccess({
          cases: cases.data[Object.keys(cases.data)[0]].history,
        });
      })
    )
  );

  fetchRegionDeaths = createEffect(() =>
    this.actions$.pipe(
      ofType(RegionActions.RegionCasesTypes.GET_DEATH_NUMBERS),
      map((action: RegionActions.GetDeathNumbers) => action.payload),
      switchMap((payload) =>
        this.regionService.getRegionDeaths(payload.region, payload.days)
      ),
      map((deaths) => {
        return new RegionActions.GetDeathsNumbersSuccess({
          deaths: deaths.data[Object.keys(deaths.data)[0]].history,
        });
      })
    )
  );

  fetchRegionRecovered = createEffect(() =>
    this.actions$.pipe(
      ofType(RegionActions.RegionCasesTypes.GET_RECOVERED_NUMBERS),
      map((action: RegionActions.GetRecoveredNumbers) => action.payload),
      switchMap((payload) =>
        this.regionService.getRegionRecovered(payload.region, payload.days)
      ),
      map((recovered) => {
        return new RegionActions.GetRecoveredNumbersSuccess({
          recovered: recovered.data[Object.keys(recovered.data)[0]].history,
        });
      })
    )
  );
}
