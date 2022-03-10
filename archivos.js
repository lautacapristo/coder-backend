const fs = require('fs')

// fs.writeFileSync('primerArchivo.txt', 'Hola')
let deletefile = true;
let content; 
if (fs.existsSync('primerArchivo.txt', 'utf-8')){
    if(deletefile) {
        console.log('delete Archivo')
        fs.unlinkSync('primerarchivo.txt')
    }
//    content = fs.readFileSync('primerArchivo.txt', 'utf-8');
} else { 
    console.log('No existe el archivo')
}
console.log(content);