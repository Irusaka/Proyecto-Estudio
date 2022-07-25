class Estudiante {
    nombre;
    asignaturas = ["JS","HTML","CSS"];
    constructor(name){
        this.nombre = name;
    }
    obtenDatos(){
        return {nombre:this.nombre, asignaturas: this.asignaturas};
    }
}

const estudianteUno = new Estudiante ("Roberto");

console.log(estudianteUno.obtenDatos());