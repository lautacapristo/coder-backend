
const fs = require('fs')

const createFile = async() => {
    await fs.promises.writeFile('archivoPromise.txt', 'hola desde promesa')
console.log("archivo creado");
}

const readFile = async() => {
    try{
let content = await fs.promises.readFile('archivoPromise.txt', 'utf-8')
  console.log(content);
  } catch(error) {
      console.log('tu error es '+ error)
  }
}

readFile();