
export class Persona{
    id?: number;
    nombre: String;
    apellido: String;
    img: String;
    about: String;

    constructor(nombre: string, apellido: string, img: string, about: string,){
        this.nombre = nombre;
        this.apellido = apellido;
        this.img = img;
        this.about = about;
    }

}