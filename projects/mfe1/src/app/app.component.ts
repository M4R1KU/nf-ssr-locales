import { DatePipe } from '@angular/common';
import { CurrencyPipe } from '@angular/common';
import { signal } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    CurrencyPipe, DatePipe
  ]
})
export class AppComponent {
  title = 'mfe1';
  date = new Date();
  showPrice = signal(false);

  public show() {
    console.log('hii');
    this.showPrice.set(true);
  }
}

export default AppComponent;