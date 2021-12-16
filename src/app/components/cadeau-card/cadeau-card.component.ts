import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-cadeau-card',
  templateUrl: './cadeau-card.component.html',
  styleUrls: ['./cadeau-card.component.css']
})
export class CadeauCardComponent implements OnInit {
  @Output() cadeauEvent = new EventEmitter<string>();
  @Input() cadeau!:any;
  constructor() { }

  ngOnInit(): void {

  }
  deleteCadeau(id : string){
    this.cadeauEvent.emit(id)
  }
}
