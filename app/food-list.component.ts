import { Component, EventEmitter } from 'angular2/core';
import { Food } from './food.model';
import { NewFoodComponent } from './new-food.component';

@Component({
  selector: "food-list",
  inputs: ['foodList'],
  outputs: ['onFoodSelect'],
  directives: [NewFoodComponent],
  pipes: [],
  template: `
  <div *ngFor="#currentFood of foodList"
  (click)="foodClicked(currentFood)"
  [class.selected]='currentFood === selectedFood'>
    <h4> {{ currentFood.name }} </h4>
    <div *ngIf='currentFood === selectedFood'>
      <h4> Details: {{ currentFood.details }} </h4>
      <h4> Calories: {{ currentFood.calories }} </h4>
    </div>
    <br>
  </div>
  <new-food (onSubmitNewFood)="createFood($event)"></new-food>
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
  createFood(tempFood: Food): void {
    this.foodList.push(new Food(tempFood.name, tempFood.details, tempFood.calories, this.foodList.length));
  }
}
