import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Quotes } from './models/quotes.model';
@Injectable({
  providedIn: 'root',
})
export class QuoteService {
  constructor(private http: HttpClient) {}

  getQuotes() {
    return this.http.get<Quotes>(`https://api.adviceslip.com/advice`);
  }
}
