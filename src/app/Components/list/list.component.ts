import { Component, Input, OnInit } from '@angular/core';
import { PersonasService } from 'src/app/Services/personas.service';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Persona } from 'src/app/persona';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  data: any;
  faPenToSquare = faPenToSquare;
  faTrash = faTrash;

  constructor(private service: PersonasService) {
    this.service.traerPersona().subscribe((data) => {
      this.data = data;
    });
  }

  borrarPersona(element: number) {
    this.service.borrarPersona(element).subscribe((data) => {
      this.service.traerPersona().subscribe((data) => {
        this.data = data;
      });
    });
  }

  mandarDataModal(element: Persona){
    console.log(element);
    this.service.modal.emit(element)
  }


  ngOnInit(): void {
    this.service.mensaje.subscribe((data) => {
      this.data = data;
    });
  }
}
