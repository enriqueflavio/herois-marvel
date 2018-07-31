import { Component, OnInit } from '@angular/core';

import { HerosService } from './../../services/heros.service';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.scss']
})
export class HerosComponent implements OnInit {

  fillerContent = [];

  constructor(private herosService: HerosService) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.herosService.getHero()
      .subscribe((dados) => {
        // console.log(dados);
        this.addFillerContent(dados['data'].results);
      });

  }

  onScroll() {
    this.herosService.getMoreHero()
      .subscribe((dados) => {
        // console.log(dados);
        this.addFillerContent(dados['data'].results);
      });
  }

  addFillerContent (dados) {
    for (const hero of dados) {
      this.fillerContent.push(hero);
    }
  }

}
