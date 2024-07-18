export default class Cl_procesa{
    constructor(){
        this.acumEdad = 0
        this.contPersonas = 0
        this.mayorEdad = 0
        this.mayorEdadMujer=0;

    }

    procesarPersonas(personas){
        this.acumEdad+=personas.edad;
        this.contPersonas++;
        if(personas.sexo=="F" && personas.edad > this.mayorEdadMujer){
            this.mayorEdadMujer = personas.edad;
            this.mayorEdad = personas.edad;
        }
    }

    promedio(){
        return this.acumEdad/this.contPersonas;
    
    }
    edadMayor(){
        return this.mayorEdad
    }
}
