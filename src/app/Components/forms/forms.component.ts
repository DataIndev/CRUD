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
    this.service
      .crearPersona(new Persona(this.id, this.nombre, this.apellido, this.edad))
      .subscribe(() =>
        this.service.traerPersona().subscribe((data) => {
          this.service.mensaje.emit(data);
        })
      );
  }

  constructor(private service: PersonasService) {}

  ngOnInit(): void {}
}
