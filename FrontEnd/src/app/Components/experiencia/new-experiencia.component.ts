import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';
import { Experiencia } from 'src/app/model/experiencia';
import { FormsModule } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {
  nombreExpe: string = '';
  descripcionExpe: string = '';
  fechainicio: string = '';
  fechafin: string = '';

  constructor(private sExperiencia: SExperienciaService, private router: Router) { }

  ngOnInit(): void {

  }
  onCreate(): void {
    const experiencia = new Experiencia();

    this.sExperiencia.save(experiencia).subscribe({
      next:(response:Experiencia) => {
        alert("Experiencia añadida");
        this.router.navigate(['']);
      }, error:(error:HttpErrorResponse) => {
        alert(error.message);
        this.router.navigate(['']);
      }
    })
  }

}
