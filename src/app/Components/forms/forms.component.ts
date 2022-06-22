import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/persona';
import { PersonasService } from 'src/app/Services/personas.service';
import { Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
})
export class FormsComponent implements OnInit {
  id!: number;
  firstName!: string;
  lastName!: string;
  age!: number;
  data: any;

  form = new FormGroup({
    
  })

  crearPersona() {
    this.service
      .createPerson(new Persona(this.id, this.firstName, this.lastName, this.age))
      .subscribe(() =>
        this.service.getPerson().subscribe((data) => {
          this.service.mensaje.emit(data);
        })
      );
  }

  constructor(private service: PersonasService) {}

  ngOnInit(): void {}
}
