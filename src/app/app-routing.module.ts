import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainViewComponent } from './planner/main-view/main-view.component';

const routes: Routes = [
  {path: 'home', component: MainViewComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},

  {path:'**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
