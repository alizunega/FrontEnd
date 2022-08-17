
export class Proyecto {
  id: number;
  nombreProyecto: string;
  descripcionProyecto: string;
  imgproyecto: string;
  linkproyecto: string;

  constructor(
    nombreProyecto: string,
    descripcionProyecto: string,
    imgproyecto: string,
    linkproyecto: string
  ) {
    this.nombreProyecto = nombreProyecto;
    this.descripcionProyecto = descripcionProyecto;
    this.imgproyecto = imgproyecto;
    this.linkproyecto = linkproyecto;
  }
}
