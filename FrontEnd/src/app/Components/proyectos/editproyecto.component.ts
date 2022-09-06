import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from '../../service/proyecto.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editproyecto',
  templateUrl: './editproyecto.component.html',
  styleUrls: ['./editproyecto.component.css'],
})
export class EditProyectoComponent implements OnInit {
  proyecto: Proyecto = null;

  constructor(
    private proyService: ProyectoService,
    private router: Router,
    private activatedRouter: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyService.listaPorId(id).subscribe((data) => {
      this.proyecto = data;
    });
  }
  onUpdate(): void {
    //deshabilitar el envío de formularios si hay campos no válidos
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

    //si campos validados, realiza el update
    const id: number = this.activatedRouter.snapshot.params['id'];
    this.proyService.update(id, this.proyecto).subscribe((data) => {
      this.proyService = data;
      alert('Proyecto Modificado');
      this.router.navigate(['']);
    });
  }
}
