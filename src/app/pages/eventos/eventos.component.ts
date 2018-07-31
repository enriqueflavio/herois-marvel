import { EventosService } from './../../services/eventos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {

  fillerContent = [];

  constructor(private eventosService: EventosService) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.eventosService.getEventos()
      .subscribe( (dados) => {
        this.addFillerContent(dados['data'].results);
      });
  }

  onScroll() {
    this.eventosService.getMoreEventos()
      .subscribe((dados) => {
        // console.log(dados);
        this.addFillerContent(dados['data'].results);
      });
  }

  addFillerContent (dados) {
    for (const eventos of dados) {
      this.fillerContent.push(eventos);
    }
  }

}
