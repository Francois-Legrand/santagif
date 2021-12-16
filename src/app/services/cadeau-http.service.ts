import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cadeau } from '../models/Cadeau';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CadeauHTTPService {

  constructor(private http : HttpClient) {}
  /**
   * the method collects all the gifts
   * @returns a get http method
   */
  findAll() : Observable<Cadeau[]>{
    return this.http.get<Cadeau[]>(`${environment.apiUrl}/cadeaux`)
  }
   /**
   * the method registers a gift
   * @returns a post http method
   */
  create(cadeau : Cadeau) : Observable<Cadeau> {
    return this.http.post<Cadeau>(`${environment.apiUrl}/cadeaux/`, cadeau)
  }
  /**
   * the method removes a gift
   * @returns a delete http method
   */
  delete(id : string) : Observable<Cadeau> {
    return this.http.delete<Cadeau>(`${environment.apiUrl}/cadeaux/${id}`)
  }

}
