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

    this.herosService.getHero()
      .subscribe((dados) => {
        console.log(dados);
        this.addFillerContent(dados['data'].results);
      });

  }

  addFillerContent (dados) {
    for (const hero of dados) {
      this.fillerContent.push(hero);
    }
  }

}
