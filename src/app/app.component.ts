import { Component, OnInit } from '@angular/core';
import { PersonasService } from './Services/personas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'CRUD - Sistema de Prueba';

  constructor(private service:PersonasService) { }


  ngOnInit(): void {

  }
}
