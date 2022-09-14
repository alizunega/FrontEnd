import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/service/skills.service';

@Component({
  selector: 'app-newskill',
  templateUrl: './newskill.component.html',
  styleUrls: ['./newskill.component.css'],
})
export class NewSkillComponent implements OnInit {
  nombreSkill: string;
  imgsrc: string = '../../../assets/hard skills/defaultSkills.png';
  colorInterno: string = '#9EA4AB';
  colorExterno: string = '#677E9B';
  porcentaje: number;

  constructor(private skillService: SkillsService, private router: Router) { }

  ngOnInit(): void { }

  onCreate(): void {
    const skill = new Skills(
      this.nombreSkill,
      this.porcentaje,
      this.imgsrc,
      this.colorInterno,
      this.colorExterno
    );


    //habilita el input si se selecciona para agregar link de imagen 
    function comprobar(obj: any) {
      if (obj.checked) {
        document.getElementById('link').style.display = "";
      } else {
        document.getElementById('link').style.display = "none";
      }
    }

    //deshabilitar el envío de formularios si hay campos no válidos
    (function () {
      'use strict';

      // obtener todos los formularios a validar
      var forms = document.querySelectorAll('.needs-validation');

      // bucle sobre ellos y evitar el envío
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

    //guarda nueva skill una vez chequeada validacion de campos
    this.skillService.save(skill).subscribe((response) => {
      alert('Skill añadida correctamente');
      this.skillService.lista();
      this.router.navigate(['']);
    });
  }
}
