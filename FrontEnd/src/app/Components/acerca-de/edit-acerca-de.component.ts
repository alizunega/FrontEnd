import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-edit-acerca-de',
  templateUrl: './edit-acerca-de.component.html',
  styleUrls: ['./edit-acerca-de.component.css'],
})
export class EditAcercaDeComponent implements OnInit {
  persona: Persona = new Persona('', '', '', '');

  constructor(
    public personaService: PersonaService,
    private tokenService: TokenService,
    private activatedRouter: ActivatedRoute,
    private router: Router
  ) {}

  isLogged = false;

  ngOnInit(): void {
    this.personaService.getPersona().subscribe((data) => {
      this.persona = data;
    });

    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }


  onUpdate(): void {
    const id = 1;

    this.personaService.update(id, this.persona).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert('Error al modificar persona');
      }
    );
  }
}
