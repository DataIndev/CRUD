import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../persona';

@Injectable({
  providedIn: 'root',
})
export class PersonasService {
  usuario!: Persona;

  url = "http://localhost:8080/personas/traer"

  constructor(private http: HttpClient) {}

  traerPersona(){
    return this.http.get(this.url)
  }

  
  
}
