import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
// import { Cart } from '../cart/cart';

@Component({
  selector: 'app-navbar',
  imports: [
    // Cart,
    RouterLink
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {

}
