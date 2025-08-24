import { Component, signal } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Categories } from './components/categories/categories';
import { Body } from './components/body/body';
import { Carousel } from './components/carousel/carousel';
import { Footer } from './components/footer/footer';
// import { Assingment1 } from './components/assingment1/assingment1';



@Component({
  selector: 'app-root',
  imports: [
    Navbar,
    // //Categories,
    // //Carousel,
    Body,
    // Assingment1,
    Footer
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('project1');
}
