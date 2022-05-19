console.log('starting server')
const path = require('path')
const express = require('express')
const app = express()
app.use(express.static('public'))

app.get('/',(req,res)=>{
    res.status(200).sendFile(path.join(__dirname,'views','index.html'))
    
})
app.get('/about',(req,res)=>{
    res.status(200).sendFile(path.join(__dirname,'views','about.html'))
    
})
app.get('/contact-me',(req,res)=>{
    res.status(200).sendFile(path.join(__dirname,'views','contact-me.html'))
   
})
app.get('/*',(req,res)=>{
    res.status(500).sendFile(path.join(__dirname,'views','404.html'))

})


app.listen(8080,()=>{
    console.log('server is starting')
})