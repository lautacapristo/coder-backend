import express from "express";
import fs from "fs";

const app = express();
const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, ()=>{
    console.log(`Listening on PORT ${PORT}`);
})

let count = 0;
let count2 = 0;

app.get("/items", async (req, res)=>{
    ++count;
    const prodS = await fs.promises.readFile("./productos.txt","utf-8");
    const prodA = await JSON.parse(prodS);
    const obj = {items: prodA, cantidad: prodA.length};
    res.send(obj);
})

app.get("/item-random", async (req, res)=>{
    ++count2;
    const prodS = await fs.promises.readFile("./productos.txt","utf-8");
    const prodA = await JSON.parse(prodS);
    const random = Math.floor(Math.random()*(prodA.length));
    const obj = {item: prodA[random]};
    res.status(200).send(obj);
})

app.get("/visitas", (req, res)=>{
    const obj = {visitas: {items: count, itemRandom: count2}};
    res.send(obj);
})