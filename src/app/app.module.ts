import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainViewComponent } from './planner/main-view/main-view.component';
import { BreakfastComponent } from './planner/breakfast/breakfast.component';
import { DinnerComponent } from './planner/dinner/dinner.component';
import { SupperComponent } from './planner/supper/supper.component';
import { MealComponent } from './planner/meal/meal.component';

@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    BreakfastComponent,
    DinnerComponent,
    SupperComponent,
    MealComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
