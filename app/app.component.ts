import { Component, EventEmitter } from 'angular2/core';
import { FoodListComponent } from './food-list.component';
import { Food } from './food.model';

@Component({
  selector: 'my-app',
  directives: [FoodListComponent],
  template: `
  <div class="container">
    <h1>Meal Tracker</h1><br>
    <food-list [foodList]="foods">
    </food-list>
  </div>
  `
})

export class AppComponent {
  public foods: Food[];
  constructor(){
    this.foods = [
      new Food("Hamburger", "Details", 354, 0),
      new Food("Fries", "Details2", 365, 1),
    ]
  }
}
