import { sortData } from 'src/app/helper';
import { RegionData } from '../model/appData.model';
import * as RegionActions from './region.actions';

export interface AppState {
  regionData: RegionData;
}

const initialState: AppState = {
  regionData: {
    regions: [],
    cases: [],
    deaths: [],
    recovered: [],
  },
};

export function regionReducer(
  state: AppState = initialState,
  action: RegionActions.RegionActions
): AppState {
  switch (action.type) {
    case RegionActions.RegionCasesTypes.GET_REGIONS:
    case RegionActions.RegionCasesTypes.GET_CASES:
    case RegionActions.RegionCasesTypes.GET_DEATH_NUMBERS:
    case RegionActions.RegionCasesTypes.GET_RECOVERED_NUMBERS:
      return state;
    case RegionActions.RegionCasesTypes.GET_REGIONS_SUCCESS:
      const sortedRegions = sortData(action.payload.regions, 'name', 'asc');
      return {
        ...state,
        regionData: { ...state.regionData, regions: sortedRegions },
      };
    case RegionActions.RegionCasesTypes.GET_CASES_SUCCESS:
      const sortedCases = sortData(action.payload.cases, 'date', 'desc');

      return {
        ...state,
        regionData: { ...state.regionData, cases: sortedCases },
      };
    case RegionActions.RegionCasesTypes.GET_DEATH_NUMBERS_SUCCESS:
      const sortedDeaths = sortData(action.payload.deaths, 'date', 'desc');

      return {
        ...state,
        regionData: { ...state.regionData, deaths: sortedDeaths },
      };
    case RegionActions.RegionCasesTypes.GET_RECOVERED_NUMBERS_SUCCESS:
      const sortedRecovered = sortData(
        action.payload.recovered,
        'date',
        'desc'
      );

      return {
        ...state,
        regionData: {
          ...state.regionData,
          recovered: sortedRecovered,
        },
      };
    default:
      return state;
  }
}
