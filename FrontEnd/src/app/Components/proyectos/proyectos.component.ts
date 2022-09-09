import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css'],
})
export class ProyectosComponent implements OnInit {
  proyectos: Proyecto[];

  constructor(
    private proService: ProyectoService,
    private tokenService: TokenService,
    private router: Router
  ) {}
  isLogged = false;

  ngOnInit(): void {
    this.cargarProyectos();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }
  cargarProyectos() {
    this.proService.lista().subscribe((data) => {
      this.proyectos = data;
    });
    }

  delete(id: number): void {
    if (id != undefined) {
      this.proService.delete(id).subscribe((success) => {
        alert('Proyecto eliminado');
        this.cargarProyectos();
      });
    }
    this.router.navigate(['']);
  }
}
