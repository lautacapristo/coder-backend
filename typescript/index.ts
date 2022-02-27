const operacion = async(num1:number, num2:number, op:string) => {
let operaciones = await import('./operacion.js')
let result = operaciones.suma(num1, num2);
return result;
}

const operaciones = async(num1: number, num2: number, op:string) => {
    let resultado = await operacion(num1,num2, op);
    console.log(resultado)
}

operaciones(5,7, "suma");