import { Component, OnInit } from '@angular/core';
import { OwlOptions } from "ngx-owl-carousel-o";

@Component({
  selector: 'app-owl-carousel-example',
  templateUrl: './owl-carousel-example.component.html',
  styleUrls: ['./owl-carousel-example.component.css']
})
export class OwlCarouselExampleComponent implements OnInit {

  constructor() { }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 600,
    margin: 15,
    nav: true,
    navText: ["<div  class='nav-button owl-prev'>‹</div>", "<div class='nav-button owl-next'>›</div>"],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      760: {
        items: 3
      },
      1000: {
        items: 4
      }
    },
  }

  ngOnInit(): void {
  }



}
