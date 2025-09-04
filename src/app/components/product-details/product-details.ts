import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails {
  prod:any;

  constructor(public activatedRoute: ActivatedRoute) {
  }
  ngOnInit(){
		this.activatedRoute.queryParams.subscribe((queryparams) => {
		console.log(queryparams);
		this.prod = queryparams;
		});
	}
}
