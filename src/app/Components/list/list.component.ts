import { Component, Input, OnInit } from '@angular/core';
import { PersonasService } from 'src/app/Services/personas.service';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  data: any;
  faPenToSquare = faPenToSquare
  faTrash = faTrash

  constructor(private service: PersonasService) {
    this.service.traerPersona().subscribe((data) => {
      this.data = data;
    });
  }

  borrarPersona(element: number){
    console.log("Hola "+element);
    this.service.borrarPersona(element).subscribe((data) => {next: "Borrado"})
  }

  ngOnInit(): void {
    this.service.mensaje.subscribe((data) => {
      this.data = data;
    });

  }
}
