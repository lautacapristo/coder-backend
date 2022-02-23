
class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
        
    }

    getName = () => {
        console.log(`${this.nombre} ${this.apellido}`)
    }
    addMascota = () => {
        this.mascotas.push("Edwincito")
    }
    countMascotas = () => {
let count = this.mascotas.length()
console.log(count)
    }
    addBook = () => {
this.libros.push({nombre: "El Principito", autor: " Antoine de Saint-Exupery"})
    }
    getBookNames = () => {
     this.libros.map(libro => libro.nombre)
   
    }
}


const usuario1 = new Usuario("Lautaro", "Capristo", [{
        nombre: "Los ojos del perro siberiano",
        autor: "Antonio Santa Ana"
    }, {
        nombre: "Quien le teme a Demetrio Latov",
        autor: "Durini Angeles"
    }],
    ["Sasha,", "Edwin"])


usuario1.getName();
usuario1.addMascota();
usuario1.addBook();
usuario1.getBookNames();
console.log(usuario1)