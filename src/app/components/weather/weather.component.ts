import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  constructor(private http : HttpClient) {}

  temp_c: string = "";
  condition: number = 0 ;
  ngOnInit(): void {
    this.http.get<{}>('http://api.weatherapi.com/v1/current.json?key=18495c68d8ab4399bb9211252212508&q=41.72996451064778, -8.162390892425293').subscribe((data:any) => {
      this.temp_c = data.current.temp_c;
      this.condition = data.current.condition.code
  })
  }

}
