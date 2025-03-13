import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../app.component';
import { WeatherComponent } from '../components/weather/weather.component';



@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    AppComponent,
    WeatherComponent,
  ]
})
export class AppModule { }
