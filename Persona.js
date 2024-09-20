class Persona {
    constructor(nombre, edad ,tipo) {
        this.nombre = nombre
        this.edad = edad 
        this.tipo = tipo        
    }
    presentar(){
        console.log(`hola, soy: ${this.nombre}, y tengo: ${this.edad}, años`)
    
    }
}
class Estudiante extends Persona {
    constructor(nombre, edad, carrera) {
        super(nombre, edad)
        this.carrera = carrera

        this.tipo = Estudiante
    }
    infoEstudiante(){
        console.log(`soy estudiante de la carrera: ${this.carrera}`)
     }
     presentar(){
        console.log(`hola, soy: ${this.nombre}, y tengo: ${this.edad}, años`)
    }
}

class Docente extends Persona {
    constructor(nombre, edad, materia,) {
        super(nombre, edad)
        this.materia = materia

        this.tipo = Docente
    }
    infoDocente(){
        console.log(`soy docente de la materia: ${this.materia}`)
    }
    presentar(){
        console.log(`hola, soy: ${this.nombre}, y tengo: ${this.edad}, años`)
    }
}

class Administrador extends Persona {
    constructor( nombre, edad, puesto,) {
        super(nombre, edad)
        this.puesto = puesto

        this.tipo = Administrador
    }
    infoAdministrador(){
        console.log(`soy administrator en el puesto: ${this.puesto}`)
    }
    presentar(){
        console.log(`hola, soy: ${this.nombre}, y tengo: ${this.edad}, años`)
    }
}

function mostrarInfoGeneral(persona) {
    persona.presentar();
    if (persona instanceof Estudiante) {
        persona.infoEstudiante();
    } else if (persona instanceof Docente) {
        persona.infoDocente();
    } else if (persona instanceof Administrador) {
        persona.infoAdministrador();
    }
}

const estudiante = new Estudiante('Juan', 20, 'Ingeniería');
const docente = new Docente('María', 35, 'Matemáticas');
const administrativo = new Administrador('Pedro', 40, 'Secretario');
mostrarInfoGeneral(estudiante); // "Hola, soy Juan, estudiante de Ingeniería."
mostrarInfoGeneral(docente); // "Hola, soy María, docente de Matemáticas."
mostrarInfoGeneral(administrativo); // "Hola, soy Pedro, administrativo en el puesto de Secretario."

