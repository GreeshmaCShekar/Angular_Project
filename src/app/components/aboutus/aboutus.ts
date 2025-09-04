import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-aboutus',
  imports: [
    RouterLink
  ],
  templateUrl: './aboutus.html',
  styleUrl: './aboutus.css'
})
export class Aboutus {
  constructor(private routerObj: Router) {
  }

  doSomethingAndGoToHome() {
    console.log('Doing SOmething....')
    this.routerObj.navigateByUrl('/home')
  }
}
