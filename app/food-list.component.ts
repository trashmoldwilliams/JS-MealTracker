import { Component, EventEmitter } from 'angular2/core';
import { Food } from './food.model';

@Component({
  selector: "food-list",
  inputs: ['foodList'],
  outputs: [],
  directives: [],
  pipes: [],
  template: `
  <div *ngFor="#currentFood of foodList">
    <h4> {{ currentFood.name }} </h4>
    <h4> {{ currentFood.details }} </h4>
    <h4> {{ currentFood.calories }} </h4>
  </div>
  `
})

export class FoodListComponent {
  public foodList: Food[];
}
