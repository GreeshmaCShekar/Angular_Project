import { Component } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-subject-demo1',
  imports: [],
  templateUrl: './subject-demo1.html',
  styleUrl: './subject-demo1.css'
})
export class SubjectDemo1 {

  ngOnInit(){
    this.subject_demo();
    this.behaviourSubject_demo();
    this.replaySubject_demo();
    this.asyncSubject_demo();
  }
  subject_demo() {
    let mySubject = new Subject(); // mySubject : publisher
    mySubject.next('AAAAA');
    mySubject.subscribe(val => console.log('Subscriber-1: ', val));
    mySubject.next('BBBBB');
    mySubject.subscribe(val => console.log('Subscriber-2: ', val));
    mySubject.next('CCCCC');
    mySubject.subscribe(val => console.log('Subscriber-3: ', val));
    mySubject.next('DDDDD');
  }
  behaviourSubject_demo() {
    let mySubject = new BehaviorSubject('Default Value'); // mySubject : publisher
    mySubject.next('AAAAA');
    mySubject.subscribe(val => console.log('Subscriber-1: ', val));
    mySubject.next('BBBBB');
    mySubject.subscribe(val => console.log('Subscriber-2: ', val));
    mySubject.next('CCCCC');
    mySubject.subscribe(val => console.log('Subscriber-3: ', val));
    mySubject.next('DDDDD');
  }
  replaySubject_demo() {
    let mySubject = new ReplaySubject(); // mySubject : publisher
    mySubject.next('AAAAA');
    mySubject.subscribe(val => console.log('Subscriber-1: ', val));
    mySubject.next('BBBBB');
    mySubject.subscribe(val => console.log('Subscriber-2: ', val));
    mySubject.next('CCCCC');
    mySubject.subscribe(val => console.log('Subscriber-3: ', val));
    mySubject.next('DDDDD');
  }
  asyncSubject_demo() {
    let mySubject = new AsyncSubject(); // mySubject : publisher
    mySubject.next('AAAAA');
    mySubject.subscribe(val => console.log('Subscriber-1: ', val));
    mySubject.next('BBBBB');
    mySubject.subscribe(val => console.log('Subscriber-2: ', val));
    mySubject.next('CCCCC');
    mySubject.subscribe(val => console.log('Subscriber-3: ', val));
    mySubject.next('DDDDD');
    mySubject.complete();
  }
}
