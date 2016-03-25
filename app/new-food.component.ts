import {Component, EventEmitter} from 'angular2/core';
import { Food } from './food.model';

@Component({
  selector: 'new-food',
  outputs: ['onSubmitNewFood'],
  template: `
  <div class="food-form">
    <h3>Create Food:</h3>
    <input placeholder="Name" class="col-sm-8 input-lg" #newName>
    <input placeholder="Details" class="col-sm-8 input-lg" #newDetails>
    <input placeholder="Calories" type="number" class="col-sm-8 input-lg" #newCalories>
    <button (click)="addFood(newName, newDetails, newCalories)">Add</button>
  </div>
    `
})
export class NewFoodComponent {
  public onSubmitNewFood: EventEmitter<Food>;
  constructor(){
    this.onSubmitNewFood = new EventEmitter();
  }
  addFood(newName: HTMLInputElement, newDetails: HTMLInputElement, newCalories: HTMLInputElement){
    var newFood = new Food(newName.value, newDetails.value, parseInt(newCalories.value), 0);
    this.onSubmitNewFood.emit(newFood);
    newName.value = "";
    newDetails.value = "";
    newCalories.value = "";
  }
}
