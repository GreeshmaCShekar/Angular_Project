import { Component, ViewEncapsulation } from '@angular/core';
import { Databinding } from '../databinding/databinding';
import { Directives } from '../directives/directives';
import { MyModal } from '../my-modal/my-modal';
import { UserList } from '../user-list/user-list';
import { ProductList } from '../product-list/product-list';
import { Demo1 } from '../demo1/demo1';
import { PipesDemo } from '../pipes-demo/pipes-demo';
import { ParentDemo } from '../parent-demo/parent-demo';
import { EmployeeCRUD } from '../employee-crud/employee-crud';
import { EmployeeList } from '../employee-list/employee-list';
// import { EmployeeTable } from '../employee-table/employee-table';
// import { EmployeeAdd } from "../employee-add/employee-add";

@Component({
  selector: 'app-body',
  imports: [
    // Databinding,
    // Directives,
    // MyModal,
    // UserList,
    // EmployeeList,
    // ProductList,
    // Demo1,
    // PipesDemo,
    // ParentDemo,
    EmployeeCRUD
],
  templateUrl: './body.html',
  styleUrl: './body.css',
  // encapsulation: ViewEncapsulation.Emulated
})
export class Body {

}
