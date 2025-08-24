import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import { MyModal } from '../my-modal/my-modal';
import { FormsModule } from '@angular/forms';
import Snackbar from 'awesome-snackbar';

@Component({
  selector: 'app-employees',
  imports: [FontAwesomeModule, MyModal, FormsModule],
  templateUrl: './employees.html',
  styleUrl: './employees.css',
})
export class Employees {
  employeesArr = [
    { id: 1, name: 'John', role: 'Manager', salary: 85000, status: 'Active' },
    { id: 2, name: 'Alice', role: 'Developer', salary: 45000, status: 'Active' },
    { id: 3, name: 'Bob', role: 'Tester', salary: 30000, status: 'Inactive' },
    { id: 4, name: 'Eve', role: 'HR', salary: 40000, status: 'Active' },
  ];
  faTrash = faTrash;
  faEye = faEye;
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
  selectedEmployee: any = null;
  viewEmployee(emp: any) {
    this.selectedEmployee = emp;
  }
  newEmployee = { id: 0, name: '', role: '', salary: 0, status: 'Active' };
  addEmployee() {
    this.newEmployee.id = this.employeesArr.length + 1;
    this.employeesArr.push({ ...this.newEmployee });
    new Snackbar('Employee is added Sucessfully!', {
      position: 'top-center',
      theme: 'light',
      timeout: 9000,
      actionText: 'x',
    });
  }
}
