export class Educacion{
    id!:number;
    titulo:string;
    nombreInstitucion:string;
    fechainicio:string;
    fechafin:string;

    constructor(titulo: string, nombreInstitucion: string, fechainicio: string, fechafin: string){
        this.titulo = titulo;
        this.nombreInstitucion = nombreInstitucion;
        this.fechainicio = fechainicio;
        this.fechafin = fechafin;
    }

}