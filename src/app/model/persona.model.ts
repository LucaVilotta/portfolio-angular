export class persona{
    id?: number;
    nombre: String;
    apellido: String;
    img: String; 
    sobreMi: String;
    especializacion: String;
    
    constructor(nombre: String, apellido: String, img: String, sobreMi: String, especializacion: String){
        this.nombre = nombre;
        this.apellido = apellido;
        this.img = img;
        this.sobreMi = sobreMi;
        this.especializacion = especializacion;
    }
}