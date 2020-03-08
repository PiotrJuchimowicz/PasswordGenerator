import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PasswordGeneratorService {

  constructor() {
  }

  public generatePassword(useLetters: boolean, useNumbers: boolean, useSymbols: boolean, length: number): string {
    let password = '';

    if (useLetters) {
      const randomLetters = this.generateRandomLetters(length);
      password = password.concat(randomLetters);
    }

    if (useNumbers) {
      const randomNumbers = this.generateRandomNumbers(length);
      password = password.concat(randomNumbers);
    }

    if (useSymbols) {
      const randomSymbols = this.generateRandomSymbols(length);
      password = password.concat(randomSymbols);
    }

    return this.generateStringPermutation(password, length);
  }

  private generateRandomLetters(numberOfLetters: number): string {
    if (numberOfLetters > 0) {
      let randomLetters = '';
      for (let i = 0; i < numberOfLetters; i++) {
        randomLetters = randomLetters.concat(this.generateRandomLetter());
      }
      return randomLetters;
    } else {
      return '';
    }
  }

  private generateRandomLetter(): string {
    const possibleLetters = 'abcdefghijklmnopqrstuvwxyz'.split('');
    return possibleLetters[Math.floor(Math.random() * (possibleLetters.length - 1))];
  }

  private generateRandomNumbers(numberOfNumbers: number): string {
    if (numberOfNumbers > 0) {
      let randomNumbers = '';
      for (let i = 0; i < numberOfNumbers; i++) {
        randomNumbers = randomNumbers.concat(this.generateRandomNumber());
      }
      return randomNumbers;
    } else {
      return '';
    }
  }

  private generateRandomNumber() {
    const possibleNumbers = '0123456789'.split('');
    return possibleNumbers[Math.floor(Math.random() * (possibleNumbers.length - 1))];
  }

  private generateRandomSymbols(numberOfSymbols: number): string {
    if (numberOfSymbols > 0) {
      let randomSymbols = '';
      for (let i = 0; i < numberOfSymbols; i++) {
        randomSymbols = randomSymbols.concat(this.generateRandomSymbol());
      }
      return randomSymbols;
    } else {
      return '';
    }
  }

  private generateRandomSymbol(): string {
    const possibleSymbols = '~!@#$%^&*()_+{}":?><'.split('');
    return possibleSymbols[Math.floor(Math.random() * (possibleSymbols.length - 1))];
  }

  private generateStringPermutation(password: string, length: number): string {
    const array: string[] = this.reduceArrayLength(password, length);

    for (let i = 0; i < length; i++) {
      const firstIndex = Math.floor(Math.random() * (array.length - 1));
      const secondIndex = Math.floor(Math.random() * (array.length - 1));

      const tmp: string = array[firstIndex];
      array[firstIndex] = array[secondIndex];
      array[secondIndex] = tmp;
    }

    return array.join('').toString();
  }

  private reduceArrayLength(password: string, length: number): string[] {
    const array: string[] = password.split('');
    const reducedArray = [];
    for (let i = 0; i < length; i++) {
      reducedArray.push(array[Math.floor(Math.random() * (password.length - 1))]);
    }

    return reducedArray;
  }
}
