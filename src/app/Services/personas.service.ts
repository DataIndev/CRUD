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
  modal = new EventEmitter<any>();

  //Get Person
  getPerson() {
    return this.http.get(`${this.url}traer`);
  }
  //Create New Person
  createPerson(persona: Persona) {
    return this.http.post(this.url + 'crear', persona, {
      headers: this.headers,
      responseType: 'text',
    });
  }

  //Delete Selected Person
  deletePerson(element: number) {
    return this.http.delete(`${this.url}borrar/${element}`, {
      headers: this.headers,
      responseType: 'text',
    });
  }

  //Update Selected Person
  updatePerson(id: number, nombre: string, apellido: string, edad: number) {
    return this.http.put(
      `${this.url}editar/${id}?nombre=${nombre}&apellido=${apellido}&edad=${edad}`,
      {
        headers: this.headers,
        responseType: 'text',
      }
    );
  }
}
