import { Component, Input, OnInit } from '@angular/core';
import { Cadeau } from 'src/app/models/cadeau';
import { CadeauHTTPService } from 'src/app/services/cadeau-http.service';
@Component({
  selector: 'app-cadeau-list',
  templateUrl: './cadeau-list.component.html',
  styleUrls: ['./cadeau-list.component.css']
})
export class CadeauListComponent implements OnInit {
 
  cadeaux: Cadeau[] = [{id:"",title:""}];
  constructor(private service : CadeauHTTPService) { 
    
  }

  ngOnInit(): void {
    this.initCadeau()
  }
  initCadeau(){
    this.service.findAll().subscribe(data => {
      this.cadeaux = data;
      console.log(data)
    })

  }
}
