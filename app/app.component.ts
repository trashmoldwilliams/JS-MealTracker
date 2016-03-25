import { Component, EventEmitter } from 'angular2/core';

@Component({
  selector: 'my-app',
  template:`
  <div class="container">
    <h1>Meal Tracker</h1>
  </div>
  `
})

export class AppComponent {
  public foods: Food[];
  constructor(){
    this.foods = [
      new Food("Hamburger", "Details", 354, 0);
      new Food("Fries", "Details2", 365, 1);
    ]
  }
}
