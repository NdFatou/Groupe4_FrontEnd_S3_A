import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WeatherService } from './services/weather.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [CommonModule,RouterOutlet, FormsModule],
  providers: [WeatherService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  city: string = "";
  weatherData: any = null;
  error: string = '';

    constructor(private weatherService: WeatherService) { }

    /*ngOnInit(): void {
      this.weatherService.getWeatherByCity('Thies')
        .subscribe({
          next: (response) => {
            this.weatherData = response;
            console.log(response);
          }
        });

        this.city = ""
    }*/


  searchWeather() {
    if (!this.city.trim()) {
      this.error = 'Veuillez entrer le nom d\'une ville';
      return;
    }

    this.error = '';
    this.weatherData = null;

    this.weatherService.getWeatherByCity(this.city).subscribe({
      next: (data: any) => {
        if (data) {
          this.weatherData = data;
          this.error = '';
          // Mise à jour des coordonnées de la carte

        } else {
          this.error = 'Aucune donnée trouvée pour cette ville';
        }
      },
      error: (err) => {
        console.error('Erreur:', err);
        if (err.status === 404) {
          this.error = 'Ville non trouvée. Veuillez vérifier le nom de la ville.';
        } else {
          this.error = 'Une erreur est survenue lors de la recherche de la météo.';
        }
        this.weatherData = null;
      }
    });
  }
}
