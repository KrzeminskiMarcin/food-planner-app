import { Component, Input, OnInit } from '@angular/core';
import { Meal } from '../meal';

@Component({
  selector: 'app-dinner',
  templateUrl: './dinner.component.html',
  styleUrls: ['./dinner.component.css']
})
export class DinnerComponent implements OnInit {
  @Input() meals: Meal[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
