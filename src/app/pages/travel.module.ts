import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HomeModule } from './home-page/home.module';
import { ServicesPageModule } from './services-page/services-page.module';
import { BlogPageModule } from './blog-page/blog-page.module';
import { AboutPageModule } from './about-page/about-page.module';
import { ContactPageModule } from './contact-page/contact-page.module';

@NgModule({
  declarations: [


  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeModule,
    ServicesPageModule,
    BlogPageModule,
    AboutPageModule,
    ContactPageModule
  ]
})
export class TravelModule { }
