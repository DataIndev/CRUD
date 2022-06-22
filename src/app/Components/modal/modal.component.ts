import { Component, Input, OnInit } from '@angular/core';
import { Persona } from 'src/app/persona';
import { PersonasService } from 'src/app/Services/personas.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  nombre!: string;
  apellido!: string;
  edad!: number;
  id!: number;

  modalNombre!: string;
  modalApellido!: string;
  modalEdad!: number;

  constructor(private service: PersonasService) {
    this.service.modal.subscribe((data) => {
      this.nombre = data.nombre;
      this.apellido = data.apellido;
      this.edad = data.edad;
      this.id = data.id;
    });
  }

  editarPersona() {
    this.service
      .updatePerson(
        this.id,
        this.modalNombre,
        this.modalApellido,
        this.modalEdad
      )
      .subscribe(() => {
        this.service.getPerson().subscribe((data) => {
          this.service.mensaje.emit(data);
        });
      });
  }

  ngOnInit(): void {}
}
