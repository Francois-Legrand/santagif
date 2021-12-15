import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadeau-list',
  templateUrl: './cadeau-list.component.html',
  styleUrls: ['./cadeau-list.component.css']
})
export class CadeauListComponent implements OnInit {
 
  cadeaux: { id: number, title: string }[] = [
    { "id": 0, "title": "Available" },
    { "id": 1, "title": "Ready" },
    { "id": 2, "title": "Started" }
  ];
  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
