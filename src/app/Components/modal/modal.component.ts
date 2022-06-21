import { Component, Input, OnInit } from '@angular/core';
import { Persona } from 'src/app/persona';
import { PersonasService } from 'src/app/Services/personas.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  nombre!: string
  apellido!:string
  edad!: number
  id!:number

  constructor(private service: PersonasService) { 
    this.service.modal.subscribe((data) => {
      this.nombre = data.nombre
      this.apellido = data.apellido
      this.edad = data.edad
      this.id = data.id
    })
    
  }


  ngOnInit(): void {

  }

}
