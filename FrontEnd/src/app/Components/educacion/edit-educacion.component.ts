import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css'],
})
export class EditEducacionComponent implements OnInit {
  educacion: Educacion = null;

  constructor(
    private sEducacion: EducacionService,
    private activatedRouter: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sEducacion.listaPorId(id).subscribe((data) => {
      this.educacion = data;
    });
  }

  onUpdate(): void {
    const id: number = this.activatedRouter.snapshot.params['id'];
    this.sEducacion.update(id, this.educacion).subscribe(
      (data) => {
        this.router.navigate(['']);
      },
      (err) => {
        alert('Error al modificar la educacion');
        this.router.navigate(['']);
      }
    );
  }
}
