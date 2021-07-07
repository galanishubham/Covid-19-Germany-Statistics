import * as CountryActions from './country.actions';
import { CountryData } from '../model/appData.model';
import { sortData } from 'src/app/helper';

export interface AppState {
  countryData: CountryData;
}

const initialState: AppState = {
  countryData: {
    cases: [],
    deaths: [],
    recovered: [],
  },
};

export function countryReducer(
  state: AppState = initialState,
  action: CountryActions.CountryActions
): AppState {
  switch (action.type) {
    case CountryActions.CountryCasesTypes.GET_CASES:
    case CountryActions.CountryCasesTypes.GET_DEATH_NUMBERS:
    case CountryActions.CountryCasesTypes.GET_RECOVERED_NUMBERS:
      return state;

    case CountryActions.CountryCasesTypes.GET_CASES_SUCCESS:
      const sortedCases = sortData(action.payload.cases, 'date', 'desc');
      return {
        ...state,
        countryData: { ...state.countryData, cases: sortedCases },
      };

    case CountryActions.CountryCasesTypes.GET_DEATH_NUMBERS_SUCCESS:
      const sortedDeaths = sortData(action.payload.deaths, 'date', 'desc');

      return {
        ...state,
        countryData: { ...state.countryData, deaths: sortedDeaths },
      };

    case CountryActions.CountryCasesTypes.GET_RECOVERED_NUMBERS_SUCCESS:
      const sortedRecovered = sortData(
        action.payload.recovered,
        'date',
        'desc'
      );

      return {
        ...state,
        countryData: {
          ...state.countryData,
          recovered: sortedRecovered,
        },
      };

    default:
      return state;
  }
}
