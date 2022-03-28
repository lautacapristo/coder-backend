import express from 'express';
const router = express.Router();




router.get('/', (req, res) => {
    res.send("hola pero desde router pets")
})
export default router;