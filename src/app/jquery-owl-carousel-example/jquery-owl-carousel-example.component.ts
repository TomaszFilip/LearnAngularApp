import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jquery-owl-carousel-example',
  templateUrl: './jquery-owl-carousel-example.component.html',
  styleUrls: ['./jquery-owl-carousel-example.component.css']
})
export class JqueryOwlCarouselExampleComponent {
  title = 'owl-carousel';
  myCarouselImages =['https://via.placeholder.com/600/d32776','https://via.placeholder.com/600/f66b97','https://via.placeholder.com/600/56a8c2'];

  myCarouselOptions={items: 3, dots: false, nav: true, lazyLoad:true};
}
