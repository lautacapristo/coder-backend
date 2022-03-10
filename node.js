let productos = [
    {id: 1, nombre: "Escuadra", precio: 323.45 },
    {id: 2, nombre: "Calculadora", precio: 234.56 },
    {id: 3, nombre: "Globo terraqueo", precio:45.67 },
    {id: 4, nombre: "Paleta Pintura", precio: 456.78 },
    {id: 5, nombre: "Agenda", precio: 78.90 },
    
]
let string = '';
productos.forEach(producto=>string=string+`, ${producto.nombre}`)

// console.log(string);

let total = productos.reduce((acumulador, valorActual) => acumulador+valorActual.precio, 0)

console.log(total);

let promedio = total/productos.length;

console.log(promedio)

let min = productos[0].precio;
let max = productos[0].precio;

productos.forEach(producto => {
    if (producto.precio<min) min=producto.precio;
    if(producto.precio>max) max=producto.precio;
})

console.log(min)
console.log(max)

let sendObj = {
    nombres: string,
    total,
    promedio,
    max,
    min 
}

console.log(sendObj)