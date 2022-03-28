const socket = io();
let log = document.getElementById('log')
let chatBox = document.getElementById('chatBox')

let user;
Swal.fire({
    title:"Identificate",
    input: 'text',
    allowOutsideClick: false,
    inputValidator: (value) => {
        return !value && 'Necesitas escribir un nombre de usuario para participar'
    }
}).then(result => {
    user = result.value;
})

/*trim va a los extremos*/
chatBox.addEventListener('keyup', evt => {
    if(evt.key==="Enter") {
        if(chatBox.value.trim().length>0) { //por lo menos envia una letra
 socket.emit('message', {user, message:chatBox.value.trim()},
 chatBox.value="")
        }
    }
})
//sockets
socket.on('log', data=> {
    let messages="";
    data.forEach(log=> {
        messages = messages + `${log.user} dice ${log.message} </br>`
    })
    log.innerHTML=messages;
})


// CLASE QUE ME FALTAN 15 MIN
// const input = document.getElementById('prueba');

// input.addEventListener('keyup', evt=>{
//     if(evt.key==="Enter") {
//         socket.emit('keyboard', input.value);
//     }
// })

// SOCKET EVENTS

// socket.on('log', data=> {
//     let log = document.getElementById('log')
//     let message = "";
//     data.forEach(message => {
//         messages = messages + `${message.client} dice: ${message.message} </br>`
//     })
// })