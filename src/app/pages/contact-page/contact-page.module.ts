import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { DescriptionComponent } from './description/description.component';
import { FormContactComponent } from './form-contact/form-contact.component';
import { MapComponent } from './map/map.component';



@NgModule({
  declarations: [
    ContactComponent,
    HeaderComponent,
    DescriptionComponent,
    FormContactComponent,
    MapComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ContactPageModule { }
