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
      //para deshabilitar el envío de formularios si hay campos no válidos
      (function () {
        'use strict';
  
        // Obtener todos los formularios a los que queremos aplicar estilos de validación de Bootstrap personalizados
        var forms = document.querySelectorAll('.needs-validation');
  
        // Bucle sobre ellos y evitar el envío
        Array.prototype.slice.call(forms).forEach(function (form) {
          form.addEventListener(
            'submit',
            function (event: any): void {
              if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
              }
  
              form.classList.add('was-validated');
            },
            false
          );
        });
      })();

    const id: number = this.activatedRouter.snapshot.params['id'];
    this.sEducacion.update(id, this.educacion).subscribe(
      (data) => {
        this.sEducacion = data;
        alert("Educación Modificada");
        this.router.navigate(['']);
      }
    );
  }
}
