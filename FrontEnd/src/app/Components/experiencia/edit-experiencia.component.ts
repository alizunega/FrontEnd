import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css'],
})
export class EditExperienciaComponent implements OnInit {
  experiencia: Experiencia = null;

  constructor(
    private sExperiencia: SExperienciaService,
    private activatedRouter: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
   const id:number = this.activatedRouter.snapshot.params['id'];
    console.log(id);
    this.sExperiencia.update(id, this.experiencia).subscribe({
      next: (response: Experiencia) => {
        this.experiencia = response;
        this.router.navigate(['']);
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
        this.router.navigate(['']);
      },
    });
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sExperiencia.update(id, this.experiencia).subscribe(
      (data) => {
        this.router.navigate(['']);
      },
      (err) => {
        alert('Error al modificar experiencia');
        this.router.navigate(['']);
      }
    );
  }
}
