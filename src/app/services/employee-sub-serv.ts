import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeSubServ {
  private employeeListSubject=new BehaviorSubject([
    { id: 1, name: 'John', role: 'Manager', salary: 85000, status: 'Active' },
    { id: 2, name: 'Alice', role: 'Developer', salary: 45000, status: 'Active' },
    { id: 3, name: 'Bob', role: 'Tester', salary: 30000, status: 'Inactive' },
    { id: 4, name: 'Eve', role: 'HR', salary: 40000, status: 'Active' }
  ]);
  EachEmployee$=this.employeeListSubject.asObservable();

  addEmployee(newEmployee:any){
    const Employees:any=this.employeeListSubject.value;
    Employees.push(newEmployee);
    this.employeeListSubject.next(Employees);
  }
  clearEmployee(id:number){
    const Employees:any=this.employeeListSubject.value;
    const EmployeesAfterClear=Employees.filter((emp:any)=>{
      return emp.id!=id;
    });
    this.employeeListSubject.next(EmployeesAfterClear);
  }
}
