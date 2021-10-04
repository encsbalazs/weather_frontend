import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { HttpClientModule } from '@angular/common/http';
import { DailyWeatherComponent } from './daily-weather/daily-weather.component';
import { WeatherServiceService } from './weather-service.service';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    DailyWeatherComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule
    
  ],
  providers: [WeatherServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
