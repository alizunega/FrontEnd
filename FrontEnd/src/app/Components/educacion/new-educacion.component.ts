import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
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
  fechafin: string = 'Actualidad';

  constructor(private sEducacion: EducacionService, private router: Router) {}

  ngOnInit(): void {}

  onCreate(): void {
    const educacion = new Educacion(
      this.titulo,
      this.nombreInstitucion,
      this.fechainicio,
      this.fechafin
    );
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

    this.sEducacion.save(educacion).subscribe((response) => {
      alert('Educación añadida');
      this.sEducacion.lista();
      this.router.navigate(['']);
    });
  }
}
