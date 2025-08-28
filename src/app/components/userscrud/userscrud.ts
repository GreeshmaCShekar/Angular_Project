import { Component } from '@angular/core';
import { UsercrudService } from '../../services/usercrud-service';
import { Userclass } from '../../models/userclass';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-userscrud',
  imports: [FormsModule],
  templateUrl: './userscrud.html',
  styleUrl: './userscrud.css',
})
export class Userscrud {
  usersObj: Userclass[] = [];
  inputId: string = '';
  inputName: string = '';
  inputUserName: string = '';
  inputEmail: string = '';
  inputPhone: string = '';

  constructor(public usercrudService: UsercrudService) {
    console.log(
      'Data from promise: ' +
        usercrudService.getAll().then((res) => res.json().then((data) => data))
    );
  }

  ngOnInit() {
    this.usercrudService
      .getAllUsers()
      .subscribe((response: Userclass[]) => (this.usersObj = response));
  }

  formSubmit() {
    const newUser: Userclass = {
      id: this.inputId,
      name: this.inputName,
      username: this.inputUserName,
      email: this.inputEmail,
      phone: this.inputPhone,
    };

    this.usercrudService.addNewUser(newUser).subscribe((nUser: any) => {
      this.usersObj.push(nUser);
    });
  }

  deleteUser(userId: any) {
    this.usercrudService.deleteUser(userId).subscribe((response: any) => {
      this.usersObj = this.usersObj.filter((user) => user.id !== userId);
    });
  }

  editUser(user: Userclass) {
    this.inputId = user.id;
    this.inputName = user.name;
    this.inputUserName = user.username;
    this.inputEmail = user.email;
    this.inputPhone = user.phone;
  }

  formUpdate() {
    const updatedUser: Userclass = {
      id: this.inputId,
      name: this.inputName,
      username: this.inputUserName,
      email: this.inputEmail,
      phone: this.inputPhone,
    };

    this.usercrudService.updateUser(this.inputId, updatedUser).subscribe((response: any) => {
      const index = this.usersObj.findIndex((user) => user.id === this.inputId);
      if (index !== -1) {
        this.usersObj[index] = response;
      }
    });
  }
}
