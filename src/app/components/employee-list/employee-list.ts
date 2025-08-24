import { Component } from '@angular/core';
import employeeArr from './employee_data';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-employee-list',
  imports: [
    FontAwesomeModule,

  ],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css'
})
export class EmployeeList {
  employees = employeeArr;
  faTrash = faTrash;
  faEye = faEye;
  faEdit = faEdit;
}
