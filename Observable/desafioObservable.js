import {Observable} from 'rxjs';

function contarMultiple(tiempo) {
    let timer;
    let contador = 0;
    return new Observable(observer => {
        observer.next(contador++);
        timer = setInterval(() => {
            observer.next(contador++);
            if(contador===5) {
                observer.error("llegue a 5")
            }
        }, tiempo)
    })
}

let observer = contarMultiple(2000).subscribe({
    next: (valor) => console.log(valor),
    error:(error) => console.log(error),
    completed:() =>console.log("finish")
})

setTimeout(() => {
   
   let observer2 = contarMultiple(10000).subscribe( {
        next: (valor) => console.log(valor),
    error:(error) => console.log(error),
    completed:() =>console.log("finish")

    })
}, 5000)