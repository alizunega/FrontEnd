import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css']
})
export class EditEducacionComponent implements OnInit {
  public educacion: Educacion = null;

  constructor(private sEducacion: EducacionService, 
              private activatedRouter: ActivatedRoute, private router: Router) { }

              ngOnInit(): void {
              }
            
              onUpdate(): void{
                const id: number  = this.activatedRouter.snapshot.params['id'];
                this.sEducacion.editEducacion(id, this.educacion).subscribe({
                  next:(response:Educacion) => {
                    this.router.navigate(['']);
                  }, error:(error:HttpErrorResponse) =>{
                     alert("Error al modificar educación");
                     this.router.navigate(['']);
                  }
                }
                 
                );
              }

}
