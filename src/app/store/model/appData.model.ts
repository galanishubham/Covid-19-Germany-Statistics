export interface CountryData {
  cases: Cases[];
  deaths: Deaths[];
  recovered: Recovered[];
}

export interface allData {
  cases: number;
  deaths: number;
  recovered: number;
}

export interface Cases {
  cases: number;
  date: Date;
}

export interface Deaths {
  deaths: number;
  date: Date;
}

export interface Recovered {
  recovered: number;
  date: Date;
}

export interface HttpResCases {
  data: Cases[];
}

export interface HttpResRecovered {
  data: Recovered[];
}

export interface HttpResDeaths {
  data: Deaths[];
}

// -------------------------------------------------------------

export interface RegionData {
  regions: Object;
  cases: Cases[];
  deaths: Deaths[];
  recovered: Recovered[];
}

export interface RegionNames {
  id: number;
  name: string;
  history: [];
}

export interface HttpResStateNames {
  data: Object;
}
