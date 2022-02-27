
class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
        
    }

    getFullName = () => {
        console.log(`${this.nombre} ${this.apellido}`)
    }
    addMascota = () => {
        this.mascotas.push("Edwincito")
    }
    getMascota = () => {
        console.log(` En total son ${this.mascotas.length} mascotas las cuales son ${this.mascotas}`);
    }
    addBook = () => {
this.libros.push({nombre: "El Principito", autor: " Antoine de Saint-Exupery"})
    }
    getBookNames = () => {
        const librosMap = this.libros.map(function (libro) {
            return libro.nombre;  
        })
        console.log(`Numero de Libros: ${this.libros.length}, los libros son: ${librosMap} `); 
        return (`${librosMap}`);                                                          
    }
}


const usuario1 = new Usuario("Lautaro", "Capristo", [{
        nombre: "Los ojos del perro siberiano",
        autor: "Antonio Santa Ana"
    }, {
        nombre: "Quien le teme a Demetrio Latov",
        autor: "Durini Angeles"
    }],
    ["Sasha", "Edwin"])


usuario1.getFullName();
usuario1.addMascota();
usuario1.getMascota();
usuario1.addBook();
usuario1.getBookNames();

console.log(usuario1)