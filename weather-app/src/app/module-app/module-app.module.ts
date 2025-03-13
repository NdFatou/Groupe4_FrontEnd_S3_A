import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherComponent } from './components/weather/weather.component';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from '../app.component';


@NgModule({
  declarations: [ ],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
})
export class ModuleAppModule { }
