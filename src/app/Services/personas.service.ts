import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../persona';

@Injectable({
  providedIn: 'root',
})
export class PersonasService {
  usuario!: Persona;

  url = "http://localhost:8080/personas/"

  // Headers para POST, PUT Y DELETE.
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*' });

  constructor(private http: HttpClient) {}

  traerPersona(){
    return this.http.get(`${this.url}traer`)
  }

  crearPersona(persona: any){
    let personaNueva = JSON.stringify(persona)
    console.log(personaNueva);
    this.http.post<any>(`${this.url}crear/`, {body: personaNueva}, {headers: this.headers}).subscribe(
      (val) => {
          console.log("POST call successful value returned in body", 
                      val);
      },
      response => {
          console.log("POST call in error", response);
      },
      () => {
          console.log("The POST observable is now completed.");
      });
  }

  
  
}
