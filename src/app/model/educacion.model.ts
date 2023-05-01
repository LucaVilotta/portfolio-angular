export class educacion{
    id?: number;
    institucion: String;
    titulo: String;
    
    constructor(institucion: String, titulo: String){
        this.institucion = institucion;
        this.titulo = titulo;
    }
}