import { Component } from '@angular/core';

@Component({
  selector: 'app-data-bindings',
  imports: [],
  templateUrl: './data-bindings.html',
  styleUrl: './data-bindings.css',
})
export class DataBindings {
  image = 'day-city.png';

  changeImage() {
    this.image = this.image === 'day-city.png' ? 'night-city.png' : 'day-city.png';
  }
}
