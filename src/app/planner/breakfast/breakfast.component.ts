import { Component, OnInit } from '@angular/core';
import { Meal } from '../meal';

@Component({
  selector: 'app-breakfast',
  templateUrl: './breakfast.component.html',
  styleUrls: ['./breakfast.component.css']
})
export class BreakfastComponent implements OnInit {
  meals: Meal[] = [];

  constructor() { }

  ngOnInit(): void {
    this.meals.push(new Meal('jajecznica', 1 ,'2022-11-20'));
    this.meals.push(new Meal('kanapki', 1 ,'2022-11-20'));
  }

}
