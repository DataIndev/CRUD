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
  user!: FormGroup;
  data: any;

  crearPersona() {
    if(this.user.valid){
      this.service
      .createPerson(
        new Persona(
          this.user.value.id,
          this.user.value.firstName,
          this.user.value.lastName,
          this.user.value.age
        )
      )
      .subscribe(() =>
        this.service.getPerson().subscribe((data) => {
          this.service.mensaje.emit(data);
        })
      );
    }
  }

  constructor(private service: PersonasService) {}

  ngOnInit(): void {
    this.user = new FormGroup({
      id: new FormControl(''),
      firstName: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
      ]),
      age: new FormControl('', [
        Validators.required,
        Validators.min(1),
        Validators.max(99),
      ]),
    });
  }
}
