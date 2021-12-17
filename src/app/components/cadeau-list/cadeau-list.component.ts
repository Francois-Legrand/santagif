import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cadeau } from 'src/app/models/Cadeau';
import { CadeauHTTPService } from 'src/app/services/cadeau-http.service';
@Component({
  selector: 'app-cadeau-list',
  templateUrl: './cadeau-list.component.html',
  styleUrls: ['./cadeau-list.component.css']
})
export class CadeauListComponent implements OnInit {
 
  cadeaux: Cadeau[] = [{id:"",title:"",image:""}];
  constructor(private service : CadeauHTTPService) { 
    
  }
  ngOnInit(): void {
    this.initCadeau()
  }
  initCadeau(){
    this.service.findAll().subscribe(data => {
      this.cadeaux = data;
    })

  }
  onDelete(id : string){
    this.service.delete(id).subscribe(() =>{
      let result = this.cadeaux.filter(cadeau => cadeau.id != id);
      this.cadeaux = result;
    });
  }
}
