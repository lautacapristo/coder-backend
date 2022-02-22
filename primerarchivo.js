// class Contador {
//     constructor(responsable) {
//         this.responsable = responsable;
//         this.contador = 0;
//     }
//     static contadorGeneral = 0;
//     obtenerResponsable() {
//         console.log(this.responsable)
//     }
//     obtenerCuentaIndividual() {
//         console.log(this.contador);
//     }
//     obtenerCuentaGlobal() {
//         console.log(Contador.contadorGeneral)
//     }
//     contar() {
//         Contador.contadorGeneral++;
//         this.contador++
//     }
// }

// let contador1 = new Contador ("Marce");

class Usuario {
    constructor(nombre, apellido, libros, mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }

    getName = () => {
        console.log(this.nombre +' ' + this.apellido)
    } 
}

// const usuario1 = new Usuario("Lautaro", "Capristo")

const usuario1 = new Usuario ("Lautaro", "Capristo",  [ {
    nombre:"Los ojos del perro siberiano",  fecha: 1998 
}, {  nombre:"Quien le teme a Demetrio Latov",  fecha: 2004} ], 
["Sasha,", "Edwin"])

console.log(usuario1)
usuario1.getName();