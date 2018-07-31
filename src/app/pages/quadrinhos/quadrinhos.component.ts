import { Component, OnInit } from '@angular/core';
import { QuadrinhosService } from '../../services/quadrinhos.service';

@Component({
  selector: 'app-quadrinhos',
  templateUrl: './quadrinhos.component.html',
  styleUrls: ['./quadrinhos.component.scss']
})
export class QuadrinhosComponent implements OnInit {

  fillerContent = [];

  constructor(private quadrinhosService: QuadrinhosService) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.quadrinhosService.getComics()
      .subscribe( (dados) => {
        this.addFillerContent(dados['data'].results);
      });
  }

  onScroll() {
    this.quadrinhosService.getMoreComics()
      .subscribe((dados) => {
        // console.log(dados);
        this.addFillerContent(dados['data'].results);
      });
  }

  addFillerContent (dados) {
    for (const comic of dados) {
      this.fillerContent.push(comic);
    }
  }

}
