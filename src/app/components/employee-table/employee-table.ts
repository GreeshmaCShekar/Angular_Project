import { Component } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-employee-table',
  imports: [],
  templateUrl: './employee-table.html',
  styleUrl: './employee-table.css',
  inputs:['employeesArr','faTrash'],
  outputs: ['deleteEvent']
})
export class EmployeeTable {
  employeesArr:any[]=[];
  deleteEvent = new EventEmitter<number>();
  onDelete(i: number) {
  this.deleteEvent.emit(i);
  }
}
