import { map, delay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClimaService {
  constructor(private http: HttpClient) {}

  getClima(cidade: string): Observable<any> {
    const path = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&APPID=695ed9f29c4599b7544d0db5c211d499`;

    return this.http.get<any>(path).pipe(
      map((data) => ({
        ...data,
        image: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
      })),
      delay(500)
    );
  }
}
