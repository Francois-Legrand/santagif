import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cadeau } from '../models/cadeau';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CadeauHTTPServiceService {

  constructor(private http : HttpClient) {}
  findAll() : Observable<Cadeau[]>{
    return this.http.get<Cadeau[]>(`${environment.apiUrl}/cadeaux`)
  }
  create(cadeau : Cadeau) : Observable<Cadeau> {
    return this.http.post<Cadeau>(`${environment.apiUrl}/cadeaux/`, cadeau)
  }
  delete(cadeau : Cadeau) : Observable<Cadeau> {
    return this.http.delete<Cadeau>(`${environment.apiUrl}/cadeaux`)
  }
}
