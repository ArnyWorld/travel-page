import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @ViewChild("menu") menu!:ElementRef;

  showMenu(){
    if(this.menu.nativeElement.classList.contains("navigation-container-active")){
      this.menu.nativeElement.classList.remove("navigation-container-active");
    }else{
      this.menu.nativeElement.classList.add("navigation-container-active")
    }

  }
}
