import { Component, OnInit } from '@angular/core';
import { SkillsService } from 'src/app/service/skills.service';
import { Skills } from 'src/app/model/skills';
import { TokenService } from 'src/app/service/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  skills: Skills[];

  constructor(
    private skillsService: SkillsService,
    private tokenService: TokenService,
    private router: Router
  ) {}

  isLogged = false;

  ngOnInit(): void {
    this.cargarSkills();

    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarSkills(): void {
    this.skillsService.lista().subscribe((data) => {
      this.skills = data;
    });
  }

  delete(id: number): void {
    if (id != undefined) {
      this.skillsService.delete(id).subscribe((success) => {
        this.cargarSkills();
      });
    }
    this.router.navigate(['']);
  }
}
