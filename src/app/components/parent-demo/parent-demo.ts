import { Component, ViewChild } from '@angular/core';
import { Child1Demo } from '../child1-demo/child1-demo';
import { Child2Demo } from '../child2-demo/child2-demo';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-parent-demo',
  imports: [Child1Demo, Child2Demo, FormsModule],
  templateUrl: './parent-demo.html',
  styleUrl: './parent-demo.css',
})
export class ParentDemo {
  a: number;
  parentName: string = '';

  @ViewChild('myBox') myInputBox: any;

  receiveDataFromChild(dataFromChild: any) {
    this.parentName = dataFromChild;
  }

  constructor() {
    this.a = 100; // initialize class members
    console.log('Parent constructor');
    console.log(this.myInputBox);
  }
  // ngOnChanges() {
  //   console.log('Parent ngOnChanges');
  // }
  // ngOnInit() {
  //   console.log('Parent ngOnInit');
  // }
  // ngDoCheck() {
  //   console.log('Parent ngDoCheck');
  // }
  // ngAfterContentInit() {
  //   console.log('Parent ngAfterContentInit');
  // }
  // ngAfterContentChecked() {
  //   console.log('Parent ngAfterContentChecked')
  // }
  ngAfterViewInit() {
    console.log('Parent ngAfterViewInit');
    console.log(this.myInputBox);
    this.myInputBox.nativeElement.focus();
    this.myInputBox.nativeElement.style.border = '5px dotted red';
  }
  // ngAfterViewChecked() {
  //   console.log('Parent ngAfterViewChecked');
  // }
  // ngOnDestroy() {
  //   console.log('Parent ngOnDestory');
  // }
}
