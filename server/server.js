const express = require ('express');//import express using require method
const cors = require ('cors')
const app = express();//start up express
const main = require('./routes/mainRoute')

app.use(express.json());
app.use(cors())
app.use('/', main)

app.listen(8080,() => {
    console.log("------Server is ready-------")
});