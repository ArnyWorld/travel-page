import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ActivitiesComponent } from './activities/activities.component';
import { ActivityComponent } from './activity/activity.component';



@NgModule({
  declarations: [
    HeaderComponent,
    ActivitiesComponent,
    ActivityComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ServicesPageModule { }
