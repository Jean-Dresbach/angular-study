import { Component, signal } from '@angular/core';
// import { FirstComponent } from "./first-component/first-component";
import { DataBindings } from './data-bindings/data-bindings';

@Component({
  selector: 'app-root',
  imports: [DataBindings],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('curso-angular');
}
