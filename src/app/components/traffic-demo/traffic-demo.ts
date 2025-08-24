import { Component } from '@angular/core';

@Component({
  selector: 'app-traffic-demo',
  imports: [],
  templateUrl: './traffic-demo.html',
  styleUrl: './traffic-demo.css'
})
export class TrafficDemo {
  config: any;
  colorsArr: string[];
  selectedColor: string = 'red';
  timer: any;
  constructor() {
    this.config = {
      "red": { nextColor: 'green', duration: 3000 },
      "green": { nextColor: 'yellow', duration: 5000 },
      "yellow": { nextColor: 'red', duration: 2000 }
    };
    this.colorsArr = Object.keys(this.config);
  }
  ngDoCheck() {
    const { duration, nextColor } = this.config[this.selectedColor];
    this.timer = setTimeout(() => {
      this.selectedColor = nextColor;
    }, duration)
  }
  ngOnDestroy() {
    clearTimeout(this.timer);
  }
}
