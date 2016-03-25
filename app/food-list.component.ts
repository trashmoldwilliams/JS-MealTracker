import { Component, EventEmitter } from 'angular2/core';
import { Food } from './food.model';
import { NewFoodComponent } from './new-food.component';
import { EditFoodComponent } from './edit-food.component';
import {CaloriesPipe} from './calories.pipe';

@Component({
  selector: "food-list",
  inputs: ['foodList'],
  outputs: ['onFoodSelect'],
  directives: [NewFoodComponent, EditFoodComponent],
  pipes: [CaloriesPipe],
  template: `
  <select (change)="onChange($event.target.value)">
    <option value="all" selected="selected">All</option>
    <option value="healthy">Healthy</option>
    <option value="unhealthy">Unhealthy</option>
  </select>
  <div *ngFor="#currentFood of foodList | calories: filterCalories"
  (click)="foodClicked(currentFood)"
  [class.selected]='currentFood === selectedFood'>
    <h4> {{ currentFood.name }} </h4>
    <div *ngIf='currentFood === selectedFood'>
      <h4> Details: {{ currentFood.details }} </h4>
      <h4> Calories: {{ currentFood.calories }} </h4>
      <br>
      <edit-food [food]="selectedFood">
      </edit-food>
      <br><br><br><br><br><br>
    </div>
    <br>
  </div>
  <br><br><br><br><br><br>
  <new-food (onSubmitNewFood)="createFood($event)"></new-food>
  `
})

export class FoodListComponent {
  public foodList: Food[];
  public onFoodSelect: EventEmitter<Food>;
  public selectedFood: Food;
  public filterCalories: string = "all";

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
  onChange(filterOption){
    this.filterCalories = filterOption;
  }
}
