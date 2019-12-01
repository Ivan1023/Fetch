const express = require ('express');//import express using require method
const cors = require ('cors')
const app = express();//start up express
const main = require('./routes/mainRoute')
const topHeadlines = require('./routes/topstories')

app.use(express.json());
app.use(cors())
app.use('/parse', main)
app.use('/topstories', topHeadlines);

app.listen(8080,() => {
    console.log("------Server is ready-------")
});