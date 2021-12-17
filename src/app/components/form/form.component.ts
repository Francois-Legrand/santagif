import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CadeauHTTPService } from 'src/app/services/cadeau-http.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
cadeauForm : FormGroup;
  constructor(private fb : FormBuilder, private service : CadeauHTTPService, private router : Router) { 
    this.cadeauForm = this.fb.group({
      title : "",
      image : ""
    })
  }
  ngOnInit(): void {
  }
  addCadeau(){
    this.service.create(this.cadeauForm.value).subscribe(()=>{
      this.router.navigateByUrl("/");
    })
  }
}
