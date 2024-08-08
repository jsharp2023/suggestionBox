const mongoose = require('mongoose')
const express = require('express')
const app = express()
const port = 3000

app.use(express.json())
mongoose
    .connect("mongodb://localhost:27017/suggestion-box")
    .then(()=>{
        app.listen(port, ()=>{
            console.log(`Server Started on port ${port}`)
            console.log('MongoDB Connected')
        })
    })

const suggestionRouter = require('./routes/suggestions/suggestionRouter')
app.use('/api/suggestions', suggestionRouter)



module.exports = app