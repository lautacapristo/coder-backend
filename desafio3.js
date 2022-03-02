const palabras = (palabra) => {
    return palabras.length;

}

const mostrarPalabras = (text, time = 2000, cb) => {
    const separar = text.split(' ');
    let c = 0;

    return new Promise((res) => {
        const intervalo = setInterval(() => {
            if (c >= separar.length) {
                clearInterval(intervalo);
                res(cb(separar))
            } else {
                console.log(`${separar[c]}`);
                c++
            }
        }, time)
    })
};


const ejecutar = async () => {
    let cc = 0;
    let a = await mostrarPalabras('primer text', 2000, palabras)
    cc = cc+a;
    let b = await mostrarPalabras('segundo text', 4000, palabras)
    cc = cc+b;
    let c = await mostrarPalabras('tercer text', 5000, palabras)
    cc = cc+c;

    console.log(`PROCESO FINALIZADO: ${cc}`);

}

ejecutar();
