import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css'],
})
export class ExperienciaComponent implements OnInit {
  experiencia: Experiencia[];

  constructor(
    private sExperiencia: SExperienciaService,
    private tokenService: TokenService,
    private router: Router
  ) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarExperiencia();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarExperiencia(): void {
    this.sExperiencia.lista().subscribe((data) => {
      this.experiencia = data;
    });
  }

  delete(id: number): void {
    if (id != undefined) {
      this.sExperiencia.delete(id).subscribe((success) => {
        console.log(success);
        alert('Experiencia eliminada');
        this.cargarExperiencia();
      });
    } else {
      alert('No se pudo eliminiar');
    }

    this.router.navigate(['']);
  }
}
