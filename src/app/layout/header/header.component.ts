import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  animate = false;
  img;

  constructor() { }

  ngOnInit() {
    this.randomImage();
    this.esperaAnimate();
  }

  esperaAnimate() {
    setTimeout( () => {
      this.animate = !this.animate;
      this.animateNow();
    }, 5000);
  }

  trocaImage() {
    setTimeout( () => {
      this.randomImage();
      this.animateNow();
    }, 1);
  }

  animateNow() {
    setTimeout( () => {
      this.img = Math.floor(Math.random() * 10);
      this.animate = !this.animate;
      this.esperaAnimate();
    }, 1000);
  }

  randomImage() {
    this.img = Math.floor(Math.random() * 10);
  }


}
