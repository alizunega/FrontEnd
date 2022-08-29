import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-newproyecto',
  templateUrl: './newproyecto.component.html',
  styleUrls: ['./newproyecto.component.css'],
})
export class NewProyectoComponent implements OnInit {
  nombreProyecto: string;
  descripcionProyecto: string;
  linkproyecto: string;
  imgproyecto: string;

  constructor(private proyService: ProyectoService, private router: Router) {}

  ngOnInit(): void {}

  onCreate(): void {
    const proyecto = new Proyecto(
      this.nombreProyecto,
      this.descripcionProyecto,
      this.imgproyecto,
      this.linkproyecto
    );

    this.proyService.save(proyecto).subscribe((response) => {
      this.proyService.lista();
      this.router.navigate(['']);
    });
  }
}
