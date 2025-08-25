import { Component} from '@angular/core';
import { Employee } from '../../services/employee';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-demo',
  imports: [
    FormsModule
  ],
  templateUrl: './employee-demo.html',
  styleUrl: './employee-demo.css'
})
export class EmployeeDemo {
  employeeData: any[]=[];
  employeesFilter: string='';
  istableView: boolean=true;
  constructor(private employeesService: Employee){
    this.employeeData=employeesService.employeesArr;
  };
  showEmployees(){
  if(this.employeesFilter=='male'){
    this.employeeData=this.employeesService.getMaleEmployees();
  }
  else if(this.employeesFilter=='female'){
    this.employeeData=this.employeesService.getFemaleEmployees();
  }
  else{
    this.employeeData=this.employeesService.getAllEmployees();
  }
  }
  toggleView(){
    this.istableView=!this.istableView;
  }
}
