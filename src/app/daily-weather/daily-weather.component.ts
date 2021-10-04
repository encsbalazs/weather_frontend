import { Component, OnChanges} from '@angular/core';
import * as L from 'leaflet';
import {} from '@angular/google-maps'

@Component({
  selector: 'app-daily-weather',
  templateUrl: './daily-weather.component.html',
  styleUrls: ['./daily-weather.component.css']
})
export class DailyWeatherComponent implements OnChanges {
  constructor(
   //private location: MapComponent,

  ) { }
  ngOnChanges(
  ): void {
  }
}
