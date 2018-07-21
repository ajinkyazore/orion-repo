import { NgModule } from '@angular/core';
import {Routes,RouterModule, Router} from '@angular/router';
import { DashboardComponent} from './dashboard/dashboard.component';
import { ItemdetailComponent } from './itemdetail/itemdetail.component';

const routes : Routes = [
                            {path:'dashboard',component:DashboardComponent},
                            {path:'itemDetail',component: ItemdetailComponent}];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
