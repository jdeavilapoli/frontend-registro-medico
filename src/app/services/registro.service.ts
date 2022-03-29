import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {RegistroUser} from '../interfaces/Registro';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  constructor(private http: HttpClient) {}
  private url = 'http://localhost:8080/employees/';

  add(form: any): Observable<RegistroUser[]> {
    return this.http.post<RegistroUser[]>(`${this.url}`, form, {responseType: 'json'});
  }
}
