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
  imgsrc: string;
  colorInterno: string='#9EA4AB';
  colorExterno: string ='#677E9B';
  porcentaje: number;

  constructor(private skillService: SkillsService, private router: Router) {}

  ngOnInit(): void {}

  onCreate(): void {
    const skill = new Skills(
      this.nombreSkill,
      this.porcentaje,
      this.imgsrc,
      this.colorInterno,
      this.colorExterno 
    );

    this.skillService.save(skill).subscribe((response) => {
      this.skillService.lista();
      this.router.navigate(['']);
    });
  }
}
