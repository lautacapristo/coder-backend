import express from 'express';
import { Server } from 'socket.io';

const app = express();
const PORT = 8081;
const server = app.listen(PORT, ()=>console.log(`listen on ${PORT}`))
//del servidor que importe del socket io, creo un nuevo servidor basado en el servidor
//ya creado de express
const io = new Server(server); 

app.use(express.static('src/public'))
let messagelog = [];
io.on('connection', socket => {
    console.log("socket conectado a mi servidor :)")
    socket.on('keyboard', data=>{
        messagelog.push({client: socket.id, message: data})
        socket.emit('log', messagelog)
    })
})

