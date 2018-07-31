import { Component, OnInit, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  menu = new EventEmitter();

  @Input() cn;

  constructor() { }

  ngOnInit() {}  

}
