
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Numberonly } from '../../directives/numberonly';

@Component({
  selector: 'app-directives',
  imports: [
    FormsModule,
    CommonModule,
    Numberonly
  ],
  templateUrl: './directives.html',
  styleUrl: './directives.css'
})
export class Directives {
  flag: boolean = true;

  num: number = 4;
  // statesArr = [];
  statesArr = ['Odisha', 'Andhra Pradesh', 'Karnataka', 'Tamilnadu', 'Kerala'];

  employees = [
    { "id": 101, "name": "sanjay", "sal": 5000, "gender": "male" },
    { "id": 104, "name": "geeta", "sal": 8000, "gender": "female" },
    { "id": 103, "name": "sameer", "sal": 7000, "gender": "male" },
    { "id": 102, "name": "sita", "sal": 9000, "gender": "female" },
    { "id": 105, "name": "deepak", "sal": 8000, "gender": "male" }
  ];
  maleEmployees = this.employees.filter(emp => emp.gender == 'male');

  myStyle1 = {
    "color": "red",
    "border": "5px dotted green",
    "margin" : "20px"
  }
  myStyle2 = {
    "color": "purple",
    "border": "5px dotted blue",
    "margin" : "10px",
    "padding" : "30px"
  }

  myFunction() {
    return this.num % 2 == 0 ? this.myStyle1 : this.myStyle2;
  }
}
