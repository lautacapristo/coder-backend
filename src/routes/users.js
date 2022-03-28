import express from "express";
import { uploader } from '../utils.js'

const router = express.Router();
let users = [];



router.get('/', (req, res) => {
res.send({status:"success", payload: users})
})

router.post('/',uploader.single('file'), (req, res) => {
let user = req.body;
users.push(user);
res.send({status: "success", message: "user added"})
})

router.put('/', (req, res) => {

})
router.delete('/', (req, res) => {

})

export default router;