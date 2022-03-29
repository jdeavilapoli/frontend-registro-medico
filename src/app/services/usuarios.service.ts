import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Usuarios} from "../interfaces/Usuarios";

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) {}
  private url = 'http://32a6-186-29-49-156.ngrok.io/api/usuarios';

  add(form: any): Observable<Usuarios[]> {
    return this.http.post<Usuarios[]>(`${this.url}`, form, {responseType: 'json'});
  }
}
