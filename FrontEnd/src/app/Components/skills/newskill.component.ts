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
  isCheck: boolean = true;

  constructor(private skillService: SkillsService, private router: Router) {}
  
  //habilita el input si se selecciona para agregar link de imagen
  public comprobar() {
    if (this.isCheck) {
      document.getElementById('imgsrc').style.display = '';
      this.isCheck = false;
    }else{
      document.getElementById('imgsrc').style.display = 'none';
      this.isCheck = true;
    }
  }

  ngOnInit(): void {}

  onCreate(): void {
    const skill = new Skills(
      this.nombreSkill,
      this.porcentaje,
      this.imgsrc,
      this.colorInterno,
      this.colorExterno
    );

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
