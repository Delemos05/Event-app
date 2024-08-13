const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const PORT = 3000

const app = express()
app.use(cors())


app.get("/", (req, res) =>{
    res.json("ola mundo")
})




app.listen(PORT, () =>{
    console.log("rodando com sucesso na porta", PORT)
})