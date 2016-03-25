import { Component, EventEmitter } from 'angular2/core';
import { Food } from './food.model';

@Component({
  selector: "food-list",
  inputs: ['foodList'],
  outputs: ['onFoodSelect'],
  directives: [],
  pipes: [],
  template: `
  <div *ngFor="#currentFood of foodList"
  (click)="foodClicked(currentFood)"
  [class.selected]='currentFood === selectedFood'>
    <h4> {{ currentFood.name }} </h4>
    <h4> {{ currentFood.details }} </h4>
    <h4> {{ currentFood.calories }} </h4>
  </div>
  `
})

export class FoodListComponent {
  public foodList: Food[];
  public onFoodSelect: EventEmitter<Food>;
  public selectedFood: Food;

  constructor(){
    this.onFoodSelect = new EventEmitter();
  }
  foodClicked(clickedFood: Food): void {
    this.selectedFood = clickedFood;
    this.onFoodSelect.emit(clickedFood);
  }
}
