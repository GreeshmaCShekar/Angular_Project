import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appNumberonly]'
})
export class Numberonly {
  @HostBinding('style.background-color')
  myBgColor: string = '';

  @HostListener('keyup', ['$event'])
  handleKeyUp(event: any) {
    let regex = new RegExp(/^[0-9]*$/);
    if (!regex.test(event.target.value)) {
      this.myBgColor = 'red';
    } else {
      this.myBgColor = 'lightgreen';
    }
  }

}
