import { Injectable } from '@angular/core';
//import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const DRAGONBALL_API: string = 'http://localhost:3000/characters';
@Injectable()
export class DragonballDashboardService {
  constructor(private http: HttpClient) {}
  getCharacters(): Observable<any> {
    return this.http.get(DRAGONBALL_API);
  }
  getCharacter(id: number){
      return this.http.get(`${DRAGONBALL_API}/${id}`)
  }
  updateCharacter(personaje : any): Observable<any> {
    personaje[1].niveldePoder = personaje[0];
    return this.http
      .put(`${DRAGONBALL_API}/${personaje[1].id}`, personaje[1]);
  }
  updateFormCharacter(personaje : any): Observable<any> {
      console.log('entro al servicio put', personaje)
    return this.http
      .put(`${DRAGONBALL_API}/${personaje.id}`, personaje);
  }
  removeCharacrer(personaje: any): Observable<any> {
      console.log('personaje', personaje)
    return this.http
      .delete(`${DRAGONBALL_API}/${personaje.id}`);
  }
}
