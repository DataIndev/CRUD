import { Component, OnInit } from '@angular/core';
import { PersonasService } from 'src/app/Services/personas.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private service:PersonasService) { }

  data:any

  ngOnInit(): void {
    this.service.traerPersona().subscribe((data) => {
      this.data = data
      
    })
  }

}
