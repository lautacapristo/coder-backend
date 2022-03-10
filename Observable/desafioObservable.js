import {Observable} from 'rxjs';

const span = document.getElementsByTagName('span')[0]
const textBox = document.getElementById('textbox')

let observableText = fromEvent(textBox, 'keyup').pipe(
    map(val=>{
        if(textBox.value === "error") throw new Error('Se rompió todo')
        if(textBox.value === "complete") console.log("El usuario termino por complete")
        return val.key;
    }) 
)
let observador = observableText.subscribe({
    next:(val) => span.innerHTML = val.split("").reverse().join(""),
    error:(error)=>{
       console.log(error)
       textBox.value =""
    },
    complete:(complete)=>{
        console.log(complete)
        textBox.value=""
    }
})
setTimeout(()=>{
observador.unsubscribe()
span.innerHTML=""
textBox.value=""
},20000)