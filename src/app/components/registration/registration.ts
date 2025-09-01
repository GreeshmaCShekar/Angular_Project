import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-registration',
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './registration.html',
  styleUrl: './registration.css'
})
export class Registration {
  user = {
    firstName: '',
    email: '',
    gender: '',
    terms: false,
    country: '',
    about: ''
  };

  submitMyForm(form: NgForm) {
    console.log(form.value)
  }
}
