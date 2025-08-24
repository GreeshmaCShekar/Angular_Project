import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { interval } from 'rxjs';
import { RemainingPipe } from '../../custom-pipes/remaining-pipe';
import { MySortPipe } from '../../custom-pipes/my-sort-pipe';

@Component({
  selector: 'app-pipes-demo',
  imports: [CommonModule,
            FormsModule,
            RemainingPipe,
            MySortPipe],
  templateUrl: './pipes-demo.html',
  styleUrl: './pipes-demo.css',
})
export class PipesDemo {
  myName = 'Sachin tENduLKaR';
  mySal = 5000;
  today = new Date();

  user = { name: 'Virat Kohli', age: 45, add: 'Delhi' };
  arr = [10, 60, 70, 20, 30, 40, 50];

  num = interval(2000);

  msg: string = '';
  msg2: string = '';
}
