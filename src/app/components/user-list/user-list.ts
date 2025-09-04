import { Component } from '@angular/core';
import * as data from './users.json';
import {NgxPaginationModule} from 'ngx-pagination';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-list',
  imports: [
    NgxPaginationModule,
    RouterLink
  ],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css'
})
export class UserList {
  usersArr = (data as any).default;

  p:any = 1;

  constructor() {
    console.log(data);
  }
}
