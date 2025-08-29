import { Component } from '@angular/core';
import { CartService } from '../../services/cart';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class Cart {
  cartArr = [];
  constructor(private cartService: CartService) {

  }
  ngOnInit() {
    this.cartService.cartItem$.subscribe(cartItems => {
      this.cartArr = cartItems;
    })
  }
}
