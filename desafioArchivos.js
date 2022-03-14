const fs = require('fs')
const productos = [];

class Archivo {
    constructor(nombre) {
        this.nombre = nombre;
    }
    async leer() {
        try {
            const content = await fs.promises.readFile(this.nombre, "utf-8");
            if (content) return console.info(content);
        } catch (error) {
            console.error([]);
        }
    }
    async guardar(producto) {
        try {
            productos.push(producto);
            await fs.promises.writeFile(this.nombre, JSON.stringify(productos));
        } catch (error) {
            console.error(`No se pudo leer el archivo ${error}`);
        }
    }
    async borrar() {
        try {
            fs.unlink(this.nombre, err => console.error(`No existe. ${err}`));
        } catch (error) {
            console.error(`Ocurrió un error. Error: ${error}`);
        }
    }
}
const archivo = new Archivo("productos.txt");
archivo.guardar({ title: "ProductoNro1", price: 400, thumbnail: "URL1", id: productos.length + 1 });
archivo.guardar({ title: "ProductoNro2", price: 200, thumbnail: "URL2", id: productos.length + 1 });
archivo.guardar({ title: "ProductoNro3", price: 200, thumbnail: "URL3", id: productos.length + 1 });
archivo.leer();