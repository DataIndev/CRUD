import { Component, Input, OnInit } from '@angular/core';
import { PersonasService } from 'src/app/Services/personas.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  data: any;

  constructor(private service: PersonasService) {
    console.log("Component List initialize constructor");
    this.service.traerPersona().subscribe((data) => {
      this.data = data;
    });

  }

  ngOnInit(): void {
    console.log("Component List initialize ngOnInit");
    this.service.mensaje.subscribe((data) => {
      this.data = data;
    });

  }
}
