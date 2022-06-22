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
  titleName: string = "Person List"

  constructor(private service: PersonasService) {
    this.service.getPerson().subscribe((data) => {
      this.data = data;
    });
  }

  deletePerson(element: number) {
    this.service.deletePerson(element).subscribe((data) => {
      this.service.getPerson().subscribe((data) => {
        this.data = data;
      });
    });
  }

  updatePerson(element: Persona){
    this.service.modal.emit(element)
  }


  ngOnInit(): void {
    this.service.mensaje.subscribe((data) => {
      this.data = data;
    });
  }
}
