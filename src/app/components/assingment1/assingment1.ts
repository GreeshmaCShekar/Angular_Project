import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-assingment1',
  imports: [FormsModule],
  templateUrl: './assingment1.html',
  styleUrl: './assingment1.css'
})
export class Assingment1 {

  //Q1
  togglePara: boolean = true;
  toggleLabel: string = "Hide";

  toggleButton(){
    this.togglePara = !this.togglePara;
    this.toggleLabel = !this.togglePara ? "Show" : "Hide";
  }

  //Q2
  text: string = "";
  mLength: number = 100;

  //q3

  selectState: string = ""

  //q4
  selectOpertation: string = "";
  num1: number = 0
  num2: number = 0
  res: number = 0
  operation(){
    if(this.selectOpertation!=""){
      switch(this.selectOpertation){
        case "+":
          this.res = +this.num1 + +this.num2
          break
        case "-":
          this.res = this.num1 - this.num2
          break
        case "*":
          this.res = this.num1 * this.num2
          break
        case "/":
          this.res = this.num1 / this.num2
          break
        default:
          this.res = 0
          break
    }
  }
}

//q5

toggleType: boolean = true
togglePassword(){
  this.toggleType = !this.toggleType
}

count: number = 0
isDisabled: boolean = false
decrement(){
  if(this.count>0){
   this.count--;
  }
  else{
    this.isDisabled = !this.isDisabled
  }
}
increment(){
   this.count++;
   this.isDisabled = false
}

isChecked: boolean = false

switchTheme(){
  this.isChecked = !this.isChecked;
}

ConvertVal: number = 0
ConvertedVal: number = 32
tempConvert(){
  this.ConvertedVal = (this.ConvertVal * (9/5)) + 32;
}
}
