import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent implements OnInit {

  titulo: string = '';
  nombreInstitucion: string = '';
  fechainicio: string =  ''
  fechafin: string = '';

  constructor(private educacionService: EducacionService, private router: Router) { }

  ngOnInit(): void {

  }
  onCreate(): void {
    const educ = new Educacion();
    this.educacionService.addEducacion(educ).subscribe(
      data => {
        alert("Educación añadida");
        this.router.navigate(['']);
      }, err => {
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }

}
