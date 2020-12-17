import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ExchangeRatesResponse } from './payloads/ExchangeRatesResponse';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ExchangeService {
  constructor(private http: HttpClient) {}

  getRates(base: string): Observable<ExchangeRatesResponse> {
    let url = 'https://api.exchangeratesapi.io/latest?base=';
    return this.http.get<ExchangeRatesResponse>(`${url}${base}`);
  }
}
