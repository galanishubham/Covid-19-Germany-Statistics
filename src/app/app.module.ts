import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import * as fromApp from './store/app.reducer';
import { EffectsModule } from '@ngrx/effects';
import * as fromCountryEffects from './store/country/country.effects';
import * as fromRegionEffects from './store/region/region.effects';
import { TableDataComponent } from './components/table-data/table-data.component';
import { GraphDataComponent } from './components/graph-data/graph-data.component';
import { CountryService } from './services/country/country.service';
import { RegionService } from './services/region/region.service';
import { TableComponent } from './components/table/table.component';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    TableDataComponent,
    GraphDataComponent,
    TableComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(fromApp.appReducer),
    EffectsModule.forRoot([
      fromCountryEffects.CountryEffects,
      fromRegionEffects.RegionEffects,
    ]),
  ],
  providers: [CountryService, RegionService, DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
