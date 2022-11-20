import { Component, Input, OnInit } from '@angular/core';
import { Meal } from '../meal';

@Component({
  selector: 'app-breakfast',
  templateUrl: './breakfast.component.html',
  styleUrls: ['./breakfast.component.css']
})
export class BreakfastComponent implements OnInit {
  @Input() meals: Meal[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
