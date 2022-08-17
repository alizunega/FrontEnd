export class Experiencia {
  id!: number;
  nombreExpe: string;
  descripcionExpe: string;
  fechainicio: string;
  fechafin: string;

  constructor(
    nombreExpe: string,
    descripcionExpe: string,
    fechainicio: string,
    fechafin: string
  ) {
    this.nombreExpe = nombreExpe;
    this.descripcionExpe = descripcionExpe;
    this.fechainicio = fechainicio;
    this.fechafin = fechafin;
  }
}
