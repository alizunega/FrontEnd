export class Experiencia {
    id? : number;
    nombreE: string;
    descripcionE: string;
    fInicio: Date;
    fFin: Date;

    constructor(nombreE: string, descripcionE: string, fInicio: Date, fFin: Date){
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
        this.fInicio = fInicio;
        this.fFin = fFin;
    }

}
