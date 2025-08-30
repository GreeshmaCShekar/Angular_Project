import { Component, ViewEncapsulation } from '@angular/core';
import { HttpDemo1 } from '../http-demo1/http-demo1';
import { CommentList } from '../comment-list/comment-list';
import { Userscrud } from '../userscrud/userscrud';
import { ObservalbeDemo1 } from "../observalbe-demo1/observalbe-demo1";
import { ObservalbeDemo2 } from '../observalbe-demo2/observalbe-demo2';
import { EmployeeSubjectDemo } from '../employee-subject-demo/employee-subject-demo';
import { SignalDemo } from "../signal-demo/signal-demo";
// import { SubjectDemo1 } from "../subject-demo1/subject-demo1";
// import { Databinding } from '../databinding/databinding';
// import { Directives } from '../directives/directives';
// import { MyModal } from '../my-modal/my-modal';
// import { UserList } from '../user-list/user-list';
import { ProductList } from '../product-list/product-list';
// import { Demo1 } from '../demo1/demo1';
// import { PipesDemo } from '../pipes-demo/pipes-demo';
// import { ParentDemo } from '../parent-demo/parent-demo';
// import { EmployeeCRUD } from '../employee-crud/employee-crud';
// import { EmployeeList } from '../employee-list/employee-list';
// import { Math1Demo } from '../math1-demo/math1-demo';
// import { Math2Demo } from '../math2-demo/math2-demo';
// import { EmployeeDemo } from "../employee-demo/employee-demo";
// import { Products } from '../products/products';
// import { TrafficDemo } from '../traffic-demo/traffic-demo';
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
    ProductList,
    // Demo1,
    // PipesDemo,
    // ParentDemo,
    // EmployeeCRUD,
    // TrafficDemo,
    // Math1Demo,
    // Math2Demo,
    // EmployeeDemo,
    // HttpDemo1,
    // Products,
    // CommentList,
    // Userscrud,
    // ObservalbeDemo1,
    // ObservalbeDemo2,
    // SubjectDemo1,
    // EmployeeSubjectDemo,
    // SignalDemo
],
  templateUrl: './body.html',
  styleUrl: './body.css',
  // encapsulation: ViewEncapsulation.Emulated
})
export class Body {

}
