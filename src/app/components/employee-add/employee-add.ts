import { Component, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-add',
  imports: [FormsModule],
  templateUrl: './employee-add.html',
  styleUrl: './employee-add.css',
  outputs: ['addEmployee'],
})
export class EmployeeAdd {
  addEmployee = new EventEmitter<any>();
  newEmployee = { name: '', role: '', salary: 0, status: 'Active' };
  onAdd() {
  this.addEmployee.emit({ ...this.newEmployee });
  }
}
