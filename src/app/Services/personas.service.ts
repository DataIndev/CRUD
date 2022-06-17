import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPersona } from '../Interface/iPersona';
import { Persona } from '../persona';

@Injectable({
  providedIn: 'root',
})
export class PersonasService {
  //URL

  url = 'http://localhost:8080/personas/';

  // Headers para POST, PUT Y DELETE.
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  });

  data:any

  constructor(private http: HttpClient) {}

  traerPersona() {
    return this.http.get(`${this.url}traer`)
  }

  borrarPersona(id: number) {
    console.log(id);
    return this.http.delete(`${this.url}borrar/${id}`, {
      headers: this.headers,
      responseType: 'text',
    });
  }

  crearPersona(persona: Persona) {
    return this.http.post(this.url + 'crear', persona, {
      headers: this.headers,
      responseType: 'text',
    });
  }
}
