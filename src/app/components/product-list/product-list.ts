import { Component } from '@angular/core';
import products from './products_data';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { Zoomout } from '../../directives/zoomout';
import { CartService } from '../../services/cart';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-list',
  imports: [
    FontAwesomeModule,
    NgxPaginationModule,
    FormsModule,
    Zoomout,
    RouterLink
  ],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList {
  filteredProductArr = products;
  faStar = faStar;
  p: any;
  searchText: string = '';

  constructor(private cartService: CartService) {
  }

  filterData() {
    this.filteredProductArr = products.filter(prod => {
      return prod.title.toLowerCase().includes(this.searchText.toLowerCase());
    });
  }
  sortByPriceAsc() {
    this.filteredProductArr.sort((p1, p2) => p1.price - p2.price);
  }
  sortByPriceDesc() {
    this.filteredProductArr.sort((p1, p2) => p2.price - p1.price);
  }


  addToCart(product: any) {
    this.cartService.addItem(product);
  }
}
