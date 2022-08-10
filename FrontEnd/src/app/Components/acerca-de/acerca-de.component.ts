
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';


@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css'],
})
export class AcercaDeComponent implements OnInit {

  public persona: Persona | undefined;
  public editPersona: Persona | undefined;

  constructor(
    private personaService: PersonaService,
    private router: Router,
    private tokenService: TokenService
  ) {}
  isLogged = false;

  ngOnInit(): void {
    this.personaService.getPersona().subscribe({
      next:(response: Persona)=>{
        this.persona = response;
      }, 
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
    
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }
}
