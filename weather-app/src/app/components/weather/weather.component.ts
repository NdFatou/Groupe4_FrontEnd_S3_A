import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WeatherService } from '../../services/weather.service';
import { CommonModule } from '@angular/common';
import { GoogleMapsModule } from '@angular/google-maps';

@Component({
  selector: 'app-weather',
  imports: [FormsModule, CommonModule, GoogleMapsModule],
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  city: string = '';
  weatherData: any = null;
  error: string = '';

 // Options de la carte Google Maps
 /* center: google.maps.LatLngLiteral = {lat: 10, lng: 10};
  zoom = 10;
  markerPosition: google.maps.LatLngLiteral = {lat: 10, lng: 10};
  mapOptions: google.maps.MapOptions = {
    zoomControl: true,
    scrollwheel: true,
    disableDoubleClickZoom: true,
    mapTypeId: 'roadmap '
  };*/

  constructor(private weatherService: WeatherService) {}

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
