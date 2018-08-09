import { NgModule } from '@angular/core';
import {Routes,RouterModule, Router} from '@angular/router';
import { DashboardComponent} from './dashboard/dashboard.component';
import { ItemdetailComponent } from './itemdetail/itemdetail.component';
import { SettingsComponent } from './settings/settings.component';

const routes : Routes = [
                            {path:'dashboard',component:DashboardComponent},
                            {path:'itemDetail',component: ItemdetailComponent},
                            {path:'settings',component: SettingsComponent}
                          ];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
