import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { DescriptionComponent } from './description/description.component';
import { CountriesComponent } from './countries/countries.component';
import { LeadershipComponent } from './leadership/leadership.component';
import { VideoComponent } from './video/video.component';



@NgModule({
  declarations: [
    AboutComponent,
    HeaderComponent,
    DescriptionComponent,
    CountriesComponent,
    LeadershipComponent,
    VideoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AboutPageModule { }
