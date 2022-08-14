import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';
import { Experiencia } from 'src/app/model/experiencia';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {
  //inicializa vacio cada uno de los inputs
  nombreExpe: string = '';
  descripcionExpe: string = '';
  fechainicio: string = '';
  fechafin: string = '';

  constructor(private sExperiencia: SExperienciaService, private router: Router) { }

  ngOnInit(): void {
    
  }

  onCreate(): void {
    const experiencia = new Experiencia(this.nombreExpe, this.descripcionExpe, this.fechainicio, this.fechafin);

    this.sExperiencia.save(experiencia).subscribe(
      data => {
        alert("Experiencia añadida");
        this.router.navigate(['']);
      }, err => {
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }

}
