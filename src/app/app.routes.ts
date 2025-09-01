import { Routes } from '@angular/router';
import { Aboutus } from './components/aboutus/aboutus';
import { Home } from './components/home/home';
import { Notfound } from './components/notfound/notfound';
import { Contactus } from './components/contactus/contactus';
import { Careers } from './components/careers/careers';

export const routes: Routes = [
  {path:'home', component: Home},
  {path:'aboutus', component: Aboutus},
  {path:'careers', component: Careers},
  {path:'contactus',component:Contactus},
  {path:'', component: Home},
  {path:'**', component: Notfound},
];
