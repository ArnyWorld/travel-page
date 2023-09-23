import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home-page/home/home.component';
import { ActivitiesComponent } from './pages/services-page/activities/activities.component';
import { AboutComponent } from './pages/about-page/about/about.component';
import { ContactComponent } from './pages/contact-page/contact/contact.component';
import { BlogComponent } from './pages/blog-page/blog/blog.component';

const routes: Routes = [
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'activities',
    component: ActivitiesComponent
  },
  {
    path:'about',
    component: AboutComponent
  },
  {
    path:'contact',
    component: ContactComponent
  },
  {
    path:'blog',
    component: BlogComponent
  },
  {
    path:'**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
