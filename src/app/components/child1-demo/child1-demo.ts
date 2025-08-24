import { Component, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child1-demo',
  imports: [],
  templateUrl: './child1-demo.html',
  styleUrl: './child1-demo.css',
  inputs: ['a', 'b']
})
export class Child1Demo {
  a: any;
  b: any;

  constructor() {
    console.log("Child constructor")
  }
  ngOnChanges(myChanges: SimpleChanges) {
    console.log('Child ngOnChanges', myChanges);
  }
  ngDoCheck() {
    console.log('Child ngDoCheck');
  }
}

