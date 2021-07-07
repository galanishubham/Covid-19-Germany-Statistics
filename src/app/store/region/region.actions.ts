import { Action } from '@ngrx/store';
import { Cases, Deaths, Recovered } from '../model/appData.model';

export enum RegionCasesTypes {
  GET_REGIONS = '[REGION] Get Regions',
  GET_REGIONS_SUCCESS = '[REGION] Get Regions Success',

  GET_CASES = '[REGION] Get Cases',
  GET_CASES_SUCCESS = '[REGION] Get Cases Success',

  GET_DEATH_NUMBERS = '[REGION] Get Deaths Numbers',
  GET_DEATH_NUMBERS_SUCCESS = '[REGION] Get Deaths Numbers Success',

  GET_RECOVERED_NUMBERS = '[REGION] Get Recovered Numbers',
  GET_RECOVERED_NUMBERS_SUCCESS = '[REGION] Get Recovered Numbers Success',
}

export class GetRegions implements Action {
  readonly type = RegionCasesTypes.GET_REGIONS;
}

export class GetRegionsSuccess implements Action {
  readonly type = RegionCasesTypes.GET_REGIONS_SUCCESS;

  constructor(public payload: { regions: Object }) {}
}

export class GetCases implements Action {
  readonly type = RegionCasesTypes.GET_CASES;

  constructor(public payload: { region: string; days: number }) {}
}

export class GetCasesSuccess implements Action {
  readonly type = RegionCasesTypes.GET_CASES_SUCCESS;

  constructor(public payload: { cases: Cases[] }) {}
}

export class GetDeathNumbers implements Action {
  readonly type = RegionCasesTypes.GET_DEATH_NUMBERS;

  constructor(public payload: { region: string; days: number }) {}
}

export class GetDeathsNumbersSuccess implements Action {
  readonly type = RegionCasesTypes.GET_DEATH_NUMBERS_SUCCESS;

  constructor(public payload: { deaths: Deaths[] }) {}
}

export class GetRecoveredNumbers implements Action {
  readonly type = RegionCasesTypes.GET_RECOVERED_NUMBERS;

  constructor(public payload: { region: string; days: number }) {}
}

export class GetRecoveredNumbersSuccess implements Action {
  readonly type = RegionCasesTypes.GET_RECOVERED_NUMBERS_SUCCESS;

  constructor(public payload: { recovered: Recovered[] }) {}
}

export type RegionActions =
  | GetRegions
  | GetRegionsSuccess
  | GetCases
  | GetCasesSuccess
  | GetDeathNumbers
  | GetDeathsNumbersSuccess
  | GetRecoveredNumbers
  | GetRecoveredNumbersSuccess;
