import { Routes } from '@angular/router';
import { Aboutus } from './components/aboutus/aboutus';
import { Home } from './components/home/home';
import { Notfound } from './components/notfound/notfound';
import { Contactus } from './components/contactus/contactus';
import { Careers } from './components/careers/careers';
import { UserList } from './components/user-list/user-list';
import { ProductList } from './components/product-list/product-list';
import { UserDetails } from './components/user-details/user-details';
import { ProductDetails } from './components/product-details/product-details';
import { PermanentJobs } from './components/permanent-jobs/permanent-jobs';
import { ContractJobs } from './components/contract-jobs/contract-jobs';
import { UploadVideo } from './components/upload-video/upload-video';
import { trainerGuard } from './guards/trainer-guard';
import { canExitGuard } from './guards/can-exit-guard';

export const routes: Routes = [
  {path:'home', component: Home},
  {path:'aboutus', component: Aboutus},
  {path:'careers', component: Careers,
    children: [
      {path: 'permanent', component: PermanentJobs},
      {path: 'contract', component: ContractJobs}
    ]
  },
  {
    path:'contactus',
    component:Contactus,
    canDeactivate:[canExitGuard]
  },
  {path:'users', component: UserList},
  {path:'userdetails/:id', component:UserDetails}, //path param
  {path:'products', component: ProductList},
  {path:'productdetails', component:ProductDetails},
  {
    path:'uploadvideo',
    component:UploadVideo,
    canActivate:[trainerGuard]
    }, //query param
  {path:'', component: Home},
  {path:'**', component: Notfound},
];
