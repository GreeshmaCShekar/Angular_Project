import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-password-generator',
  imports: [
    FormsModule,
  ],
  templateUrl: './password-generator.html',
  styleUrl: './password-generator.css'
})
export class PasswordGenerator {
  length: number = 8;
  includeUppercase: boolean = true;
  includeLowercase: boolean = true;
  includeNumbers: boolean = true;
  includeSymbols: boolean = false;

  password: string = '';

  generatePassword() {
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lower = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';

    let validChars = '';
    if (this.includeUppercase) validChars += upper;
    if (this.includeLowercase) validChars += lower;
    if (this.includeNumbers) validChars += numbers;
    if (this.includeSymbols) validChars += symbols;

    if (!validChars) {
      this.password = '⚠️ Select at least one option';
      return;
    }

    let generated = '';
    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generated += validChars[index];
    }

    this.password = generated;
  }

  copyToClipboard() {
    navigator.clipboard.writeText(this.password);
    alert('Password copied to clipboard!');
  }
}
