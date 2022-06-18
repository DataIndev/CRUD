import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
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

  constructor(private http: HttpClient) {}

  //EMITTER
  mensaje = new EventEmitter<any>();

  //CREAR PERSSONA
  crearPersona(persona: Persona) {
    return this.http
      .post(this.url + 'crear', persona, {
        headers: this.headers,
        responseType: 'text',
      })
  }

    //TRAER PERSSONA
    traerPersona() {
      return this.http.get(`${this.url}traer`);
    }
}
