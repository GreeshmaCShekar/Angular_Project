import { Component } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import * as data from './assignment2_data.json'
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-assignment2',
  imports: [
    NgxPaginationModule,
    FontAwesomeModule,
    FormsModule
  ],
  templateUrl: './assignment2.html',
  styleUrl: './assignment2.css'
})
export class Assignment2 {
  faStar=faStar;
  p:any=1;
  originalArr=(data as any).default;
  usersArr=this.originalArr;

  titleToSearch: String='';
  searchItems(){
    this.usersArr=this.originalArr.filter((item:any)=>item.title.toLowerCase().includes(this.titleToSearch.toLowerCase()));
  }
  sortPriceAsc(){
    this.usersArr.sort((a : any,b: any)=>a.price-b.price);
  }
  sortPriceDes(){
    this.usersArr.sort((a : any,b: any)=>b.price-a.price);
  }
}
