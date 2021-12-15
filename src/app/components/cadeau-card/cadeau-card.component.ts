import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadeau-card',
  templateUrl: './cadeau-card.component.html',
  styleUrls: ['./cadeau-card.component.css']
})
export class CadeauCardComponent implements OnInit {
  @Input() cadeau!:any;
  constructor() { }

  ngOnInit(): void {

  }

}