  
import { Injectable } from '@angular/core';
//import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpClient, HttpResponse } from '@angular/common/http'
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

const DRAGONBALL_API: string = 'http://localhost:3000/characters';
@Injectable()
export class DragonballDashboardService {
    
  constructor(private http : HttpClient) {
  }
  getCharacters(): Observable<any>{
    return this.http
    .get(DRAGONBALL_API)
  }
}