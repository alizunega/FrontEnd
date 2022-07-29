export class Educacion{
    id? : number;
    titulo: string;
    nombreInstitucion: string;
    fInicio: string;
    fFin: string;

    constructor(titulo: string, nombreInstitucion: string, fInicio: string, fFin: string){
        this.titulo = titulo;
        this.nombreInstitucion = nombreInstitucion;
        this.fInicio = fInicio;
        this.fFin = fFin;
    }
}