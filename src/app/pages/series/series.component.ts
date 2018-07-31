import { SeriesService } from './../../services/series.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent implements OnInit {

  fillerContent = [];

  constructor(private seriesService: SeriesService) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.seriesService.getEventos()
      .subscribe( (dados) => {
        this.addFillerContent(dados['data'].results);
      });
  }

  onScroll() {
    this.seriesService.getMoreEventos()
      .subscribe((dados) => {
        // console.log(dados);
        this.addFillerContent(dados['data'].results);
      });
  }

  addFillerContent (dados) {
    for (const serie of dados) {
      this.fillerContent.push(serie);
    }
  }

}
