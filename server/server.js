const express = require ('express');//import express using require method
const cors = require ('cors')
const app = express();//start up express
const main = require('./routes/mainRoute')
const topHeadlines = require('./routes/topstories')
const entertainment = require('./routes/entertainmentRoute')
const health = require('./routes/healthRoute')
const science = require('./routes/scienceRoute')
const sports = require('./routes/sportsRoute')
const technology = require('./routes/technologyRoute')
const search = require('./routes/searchRoute')


app.use(express.json());
app.use(cors())
app.use('/parse', main)
app.use('/topstories', topHeadlines);
app.use('/entertainment', entertainment)
app.use('/health', health)
app.use('/science', science)
app.use('/sports', sports)
app.use('/technology', technology)
app.use('/search', search)

app.listen(8080,() => {
    console.log("------Server is ready-------")
});