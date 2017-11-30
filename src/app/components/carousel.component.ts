import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  styleUrls: ['carousel.component.scss'],
  templateUrl: './carousel.component.html'
})
export class CarouselComponent implements OnInit {
  array = [1];

  constructor() {}

  ngOnInit() {
    setTimeout(_ => {
      this.array = [1, 2, 3, 4];
    }, 500);
  }
}
