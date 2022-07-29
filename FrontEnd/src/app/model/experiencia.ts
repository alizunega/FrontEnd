export class Experiencia {
    id? : number;
    nombreE: string;
    descripcionE: string;
    fInicio: string;
    fFin: string;

    constructor(nombreE: string, descripcionE: string, fInicio: string, fFin: string){
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
        this.fInicio = fInicio;
        this.fFin = fFin;
    }

}
