import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Colectivo} from './models/colectivo';

@Injectable({
  providedIn: 'root'
})
export class ColectivoService {
  private url = 'http://localhost:3000/colectivos';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }
  getColectivos(): Observable<Colectivo[]> {
    return this.http.get<Colectivo[]>(this.url);
  }
  postColectivo(colectivo1: any): Observable<Colectivo> {
    return this.http.post<Colectivo>(this.url, colectivo1, this.httpOptions);
  }
  deleteColectivo(name:string) {
    return this.http.delete(this.url + '/${name}');
  }
}