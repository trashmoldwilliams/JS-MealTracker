import {Component} from 'angular2/core';
import { Food } from './food.model';

@Component({
  selector: "edit-food",
  inputs: ['food'],
  template:`
  <div class="task-form">
    <h3>Edit Food: </h3>
    <input [(ngModel)]='food.name' class="col-sm-8 input-lg task-form" />
    <input [(ngModel)]='food.details' class="col-sm-8 input-lg task-form" />
    <input [(ngModel)]='food.calories' class="col-sm-8 input-lg task-form" />
  </div>
  `
})

export class EditFoodComponent {
  public food: Food;
}
