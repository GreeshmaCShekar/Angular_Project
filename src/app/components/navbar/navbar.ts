import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
// import { Cart } from '../cart/cart';

@Component({
  selector: 'app-navbar',
  imports: [
    // Cart,
    RouterLink,
    RouterLinkActive
],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  userRole: string = 'student'; // student
}
