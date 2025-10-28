import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DatePipe],
  template: `
    <h1>Welcome!</h1>
    <h2>{{ today | date }}</h2>
  `
})
export class HomeComponent {
  today = new Date();
}
