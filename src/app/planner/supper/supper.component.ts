import { Component, OnInit } from '@angular/core';
import { Meal } from '../meal';

@Component({
  selector: 'app-supper',
  templateUrl: './supper.component.html',
  styleUrls: ['./supper.component.css']
})
export class SupperComponent implements OnInit {
  meals: Meal[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
