import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Employee {
  employeesArr = [
    { id: 1, name: 'John', role: 'Manager', salary: 85000,gender:'male', status: 'Active' },
    { id: 2, name: 'Alice', role: 'Developer', salary: 45000, gender:'female',status: 'Active' },
    { id: 3, name: 'Bob', role: 'Tester', salary: 30000, gender:'male', status: 'Inactive' },
    { id: 4, name: 'Eve', role: 'HR', salary: 40000,gender: 'female', status: 'Active' },
  ];
  getAllEmployees(){
    return this.employeesArr;
  }
  getMaleEmployees(){
    return this.employeesArr.filter(emp=>emp.gender=='male');
  }
  getFemaleEmployees(){
    return this.employeesArr.filter(emp=>emp.gender=='female');
  }
}
