import {Component} from '@angular/core';
import {PasswordGeneratorService} from './password-generator/password-generator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private password: string;
  private length = 0;
  private useLetters = false;
  private useNumbers = false;
  private useSymbols = false;

  constructor(private passwordGenerator: PasswordGeneratorService) {
  }

  onButtonClick() {
    console.log('Button was clicked');
    this.password = this.passwordGenerator.generatePassword(this.useLetters, this.useNumbers, this.useSymbols, this.length);
  }

  onChangeUseLetters() {
    this.useLetters = !this.useLetters;
  }

  onChangeUseSymbols() {
    this.useSymbols = !this.useSymbols;
  }

  onChangeUseNumbers() {
    this.useNumbers = !this.useNumbers;
  }

  getPassword(): string {
    return this.password;
  }

  onChangeLength(length: string) {
    const parsedLength = parseInt(length, 10);

    if (!isNaN(parsedLength)) {
      this.length = parsedLength;
    }
  }

  getLength(): number {
    return this.length;
  }

  anyCheckboxChecked(): boolean {
    return this.useLetters || this.useNumbers || this.useSymbols;
  }
}
