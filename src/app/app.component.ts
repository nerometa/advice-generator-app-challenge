import { Component } from '@angular/core';
import { Quotes } from './models/quotes.model';
import { QuoteService } from './quote.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'advice-generator-app-challenge';
  quotes?: Quotes;

  constructor(private quote: QuoteService) {}

  shuffle() {
    return this.quote.getQuotes().subscribe({
      next: (res) => {
        this.quotes = res;
      },
    });
  }
}
