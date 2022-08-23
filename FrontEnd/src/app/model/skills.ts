
export class Skills {
  id: number;
  nombreSkill: string;
  porcentaje: number;
  imgsrc: string;
  colorInterno: string;
  colorExterno: string;

  constructor(
    nombreSkill: string,
    porcentaje: number,
    imgsrc: string,
    colorInterno: string,
    colorExterno: string
  ) {
    this.nombreSkill = nombreSkill;
    this.porcentaje = porcentaje;
    this.imgsrc = imgsrc;
    this.colorInterno = colorInterno;
    this.colorExterno = colorExterno;
  }
}
