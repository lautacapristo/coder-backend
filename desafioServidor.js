// const http = require('http');

// let title = Math.floor(Math.random() * 10 + 1)
// let id = Math.floor(Math.random() * 10 + 1)
// let thumbnail = Math.floor(Math.random() * 10 + 1)
// let price = Math.floor(Math.random() * 9999.99 + 0.00).toFixed(2)

// let obj = JSON.stringify([{
//     id,
//     title: ` Producto ${title}`,
//     price,
//     thumbnail: `Foto ${thumbnail}`
// }])

// const server = http.createServer((req, res) => {

//     res.end("" + obj)

// })
// server.listen(8080, () => {
//     console.log("Escuchando en puerto 8080")
// })