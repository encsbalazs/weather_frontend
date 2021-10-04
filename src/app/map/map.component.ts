import { Component, AfterViewInit} from '@angular/core';
import * as L from 'leaflet';
import {} from '@angular/google-maps'
import { HttpClient,HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {
  private map;
  public address;
  public location;
  private weather;
  private daily_weather;
  private initMap(): void {
    
    this.map = L.map('map', {
      center: [ 47.47, 19.04],
      zoom: 8
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3
    });
  
    tiles.addTo(this.map);

    this.map.doubleClickZoom.disable(); 
    this.map.on("dblclick", e => {

        let popup
        this.location = e.latlng;
        
        const popup_div=document.createElement("div")

        const icon= document.createElement("img")
            icon.src="http://openweathermap.org/img/wn/" +this.weather.weather[0].icon +  "@2x.png"
            icon.style.height="40px"
            icon.style.width="40px"
            icon.style.display="inline-block"
            icon.style.verticalAlign="top"
        
        
        const weather_temp=document.createElement("div")
          weather_temp.textContent=this.weather.main.temp
          weather_temp.className="weather_temp" 
          weather_temp.style.display="inline-block"
          weather_temp.style.fontSize="30px"
          weather_temp.style.verticalAlign="middle"
        const address_display=document.createElement("div")
          address_display.innerHTML=this.address.display_name.split(',')[0] +"<br/>"
          address_display.innerHTML +=this.weather.weather[0].description
          address_display.className="address"
          address_display.style.display="inline-block"
          address_display.style.fontSize="12px"
          address_display.style.verticalAlign="middle"
        
        
        
        popup_div.appendChild(icon)
        popup_div.appendChild(weather_temp)
        popup_div.appendChild(address_display)
  
        popup = L.popup({"className":"popup"})
          .setLatLng([e.latlng.lat,e.latlng.lng])
          
          .setContent(popup_div) 
          
          .addTo(this.map);
       
        let daily_weather_div=document.createElement("div")
            daily_weather_div.style.float="left"
            daily_weather_div.style.width="100px"
            daily_weather_div.style.height="100%"
            daily_weather_div.style.display="flex"
        let mapframe= document.getElementById("map-frame")

        mapframe?.appendChild(daily_weather_div)
        //console.log(this.daily_weather)
        for (let i of this.daily_weather.daily){
          //console.log(i)
        }
      });
      };
  

  constructor( 
    private httpClient:HttpClient,
    //location:Location
    ) { }

  ngAfterViewInit(): void {
  this.initMap();
  }
}

