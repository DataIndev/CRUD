import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../persona';

@Injectable({
  providedIn: 'root',
})
export class PersonasService {
  usuario!: Persona;

  url = "http://localhost:8080/personas"

  constructor(private http: HttpClient) {}

  traerPersona(){
    return this.http.get(`${this.url}/traer`)
  }

  crearPersona(persona: any){
    console.log(`Elemento recibo de Formulario ${persona}`);
    return this.http.post<any>(`${this.url}/crear`, persona)
  }

  
  
}
