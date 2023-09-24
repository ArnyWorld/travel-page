import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog/blog.component';
import { HeaderComponent } from './header/header.component';
import { BlogCardComponent } from './blog-card/blog-card.component';



@NgModule({
  declarations: [
    BlogComponent,
    HeaderComponent,
    BlogCardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BlogPageModule { }
