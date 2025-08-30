import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmployeeSubServ } from '../../services/employee-sub-serv';

@Component({
  selector: 'app-employee-subject-demo',
  imports: [
    FormsModule,
  ],
  templateUrl: './employee-subject-demo.html',
  styleUrl: './employee-subject-demo.css'
})
export class EmployeeSubjectDemo {
  newEmployee: any={id:0,name:'',role:'',salary:0,status:''};
  EmpArr:any=[];
  constructor(private employeeService:EmployeeSubServ){
  }
  ngOnInit(){
    this.employeeService.EachEmployee$.subscribe(Emp=>{
      this.EmpArr=Emp;
    })
  }
  addEmployeeCom(){
    this.employeeService.addEmployee({...this.newEmployee});
  }
  deleteEmployeeCom(id:number){
    this.employeeService.clearEmployee(id);
  }
}
