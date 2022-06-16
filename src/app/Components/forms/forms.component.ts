import { Component, OnInit } from '@angular/core';
import { PersonasService } from 'src/app/Services/personas.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  id!:number
  nombre!:string
  apellido!:string
  edad!:number
  data:any

  traerPersona(){
    return  console.log(this.data);
  }


  constructor(private service:PersonasService) { }


  ngOnInit(): void {
    this.service.traerPersona().subscribe((response) => {
      this.data = response
      
    })
    
  }

}
