
export class Skills {
  id: number;
  nombreSkills: string;
  porcentaje: number;
  imgsrc: string;
  colorInterno: string;
  colorExterno: string;

  constructor(
    nombreSkills: string,
    porcentaje: number,
    imgsrc: string,
    colorInterno: string,
    colorExterno: string
  ) {
    this.nombreSkills = nombreSkills;
    this.porcentaje = porcentaje;
    this.imgsrc = imgsrc;
    this.colorInterno = colorInterno;
    this.colorExterno = colorExterno;
  }
}
