import { Component } from '@angular/core';
import { EmployeeAdd } from '../employee-add/employee-add';
import { EmployeeTable } from '../employee-table/employee-table';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-employee-crud',
  imports: [EmployeeAdd, EmployeeTable],
  templateUrl: './employee-crud.html',
  styleUrl: './employee-crud.css',
})
export class EmployeeCRUD {
  employeesArr = [
    { id: 1, name: 'John', role: 'Manager', salary: 85000, status: 'Active' },
    { id: 2, name: 'Alice', role: 'Developer', salary: 45000, status: 'Active' },
    { id: 3, name: 'Bob', role: 'Tester', salary: 30000, status: 'Inactive' },
    { id: 4, name: 'Eve', role: 'HR', salary: 40000, status: 'Active' },
  ];

  deleteEmployee(i: number) {
    Swal.fire({
      title: 'Delete Employee?',
      text: 'Are you sure you want to remove this employee?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      denyButtonText: 'No',
    }).then((result) => {
      if (result.isConfirmed) {
        this.employeesArr.splice(i, 1);
        Swal.fire('Deleted!', 'Employee has been removed.', 'success');
      }
    });
  }
  newEmployee = { id: 0, name: '', role: '', salary: 0, status: 'Active' };

  addEmployee(newEmployee: any) {
    newEmployee.id = this.employeesArr.length + 1;
    this.employeesArr.push(newEmployee);
  }
}
