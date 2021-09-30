import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-daily-weather',
  templateUrl: './daily-weather.component.html',
  styleUrls: ['./daily-weather.component.css']
})
export class DailyWeatherComponent implements OnInit {
  @Input() daily_weather
  constructor() { }
  createWeather(daily_weather){
    console.log(daily_weather)
  }
  ngOnInit(
  ): void {
  }

}
