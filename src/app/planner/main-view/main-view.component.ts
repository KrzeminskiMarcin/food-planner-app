import { Component, OnInit } from '@angular/core';
import { Meal } from '../meal';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit {
  meals : Meal[] = [];

  constructor() { }

  ngOnInit(): void {
    this.meals.push(new Meal('jajecznica', 1, '2022-11-20'));
    this.meals.push(new Meal('kanapki', 1, '2022-11-20'));
    this.meals.push(new Meal('jajecznica', 2, '2022-11-20'));
    this.meals.push(new Meal('kanapki', 3, '2022-11-20'));
  }

}
