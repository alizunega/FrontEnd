import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css'],
})
export class NewEducacionComponent implements OnInit {
  titulo: string;
  nombreInstitucion: string;
  fechainicio: string;
  fechafin: string;

  constructor(private sEducacion: EducacionService, private router: Router) {}

  ngOnInit(): void {}

  onCreate(): void {
    const educacion = new Educacion(this.titulo, this.nombreInstitucion, this.fechainicio, this.fechafin);
    this.sEducacion.save(educacion).subscribe((data) => {
      alert('Educación añadida');
      this.sEducacion.lista();
      this.router.navigate(['']);
    });
  }
}
