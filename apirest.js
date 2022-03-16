// import express from 'express';

// const app = express();
// const PORT = 8080

// const server = app.listen(PORT, () =>console.log(`Listening on ${PORT}`))

// const sentence = "hola mundiyo";

// app.get('/api/sentence', (req,res) => {
//     res.send(sentence);
// })

// app.get('/api/letter/:num', (req, res) => {
//    let {num} = req.params; 
//     if(isNan(req.params.num)) res.status(400).send({error:"param is not a number"})
// let parsedNumber = parseInt(num);
// })

// import express from 'express';

// const app = express();
// const PORT = 8080

// const server = app.listen(PORT, () =>console.log(`Listening on ${PORT}`))

// app.use(express.json());
// app.use(express.urlencoded({extended:true}))

// const sentence = "lauti capo"
// //leer informacion
// app.get('/api/sentence', (req, res) => {
//     res.send(sentence);
// })
// //listar posicion
// app.get('/api/letter/:num', (req, res) => {
//    let {num} = parseInt(req.params.num);
//    let words = sentence.split(' '); 
//   if(num < 1 || num > words.length) return res.status(400).send({error:"index out of bounds"})
// res.send(words[num-1]);
// })

// app.post('/api/sentence', (req, res) => {
//     res.send("hola postman")
// })
