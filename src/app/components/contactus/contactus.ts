import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './contactus.html',
  styleUrl: './contactus.css'
})
export class Contactus {
  hasChanges: any = true;

  user = {
    "firstName": "",
    "lastName": "",
    "email": "",
    "address": {
      "city": "",
      "state": "",
      "pincode": ""
    }
  }
  submitMyForm(formDate: any) {
    console.log(formDate);
    this.hasChanges = false;
  }
}
