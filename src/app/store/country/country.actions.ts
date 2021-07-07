import { Action } from '@ngrx/store';
import { Cases, Deaths, Recovered } from '../model/appData.model';

export enum CountryCasesTypes {
  GET_CASES = '[COUNTRY] Get Cases',
  GET_CASES_SUCCESS = '[COUNTRY] Get Cases Success',

  GET_DEATH_NUMBERS = '[COUNTRY] Get Deaths Numbers',
  GET_DEATH_NUMBERS_SUCCESS = '[COUNTRY] Get Deaths Numbers Success',

  GET_RECOVERED_NUMBERS = '[COUNTRY] Get Recovered Numbers',
  GET_RECOVERED_NUMBERS_SUCCESS = '[COUNTRY] Get Recovered Numbers Success',
}

export class GetCases implements Action {
  readonly type = CountryCasesTypes.GET_CASES;

  constructor(public payload: { days: number }) {}
}

export class GetCasesSuccess implements Action {
  readonly type = CountryCasesTypes.GET_CASES_SUCCESS;

  constructor(public payload: { cases: Cases[] }) {}
}

export class GetDeathNumbers implements Action {
  readonly type = CountryCasesTypes.GET_DEATH_NUMBERS;

  constructor(public payload: { days: number }) {}
}

export class GetDeathsNumbersSuccess implements Action {
  readonly type = CountryCasesTypes.GET_DEATH_NUMBERS_SUCCESS;

  constructor(public payload: { deaths: Deaths[] }) {}
}

export class GetRecoveredNumbers implements Action {
  readonly type = CountryCasesTypes.GET_RECOVERED_NUMBERS;

  constructor(public payload: { days: number }) {}
}

export class GetRecoveredNumbersSuccess implements Action {
  readonly type = CountryCasesTypes.GET_RECOVERED_NUMBERS_SUCCESS;

  constructor(public payload: { recovered: Recovered[] }) {}
}

export type CountryActions =
  | GetCases
  | GetDeathNumbers
  | GetRecoveredNumbers
  | GetCasesSuccess
  | GetRecoveredNumbersSuccess
  | GetDeathsNumbersSuccess;
