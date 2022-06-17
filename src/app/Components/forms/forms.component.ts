import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/persona';
import { PersonasService } from 'src/app/Services/personas.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
})
export class FormsComponent implements OnInit {
  id!: number;
  nombre!: string;
  apellido!: string;
  edad!: number;
  data: any;

  crearPersona() {
    let persona = new Persona(this.id, this.nombre, this.apellido, this.edad);
    this.service.crearPersona(persona).subscribe({
      complete: () => console.log('DONE'),
    });
  }

  traerPersona() {
    return console.log(this.data);
  }

  borrarPersona() {
    this.service.borrarPersona(this.id).subscribe({
      complete: () => console.log('DONE'),
    });
  }

  actualizarPersona() {}

  constructor(private service: PersonasService) {}

  ngOnInit(): void {}
}
