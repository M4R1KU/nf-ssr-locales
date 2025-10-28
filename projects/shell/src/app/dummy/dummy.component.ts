import { Component } from '@angular/core';

@Component({
  selector: 'app-dummy',
  standalone: true,
  imports: [],
  template: `
    <h1>This is the fallback</h1>
  `
})
export class DummyComponent {
}
