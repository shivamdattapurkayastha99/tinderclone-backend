import express from 'express'
import mongoose from 'mongoose'
const app=express()
const port=process.env.PORT||8001
import Cards from './dbCards.js'
import Cors from 'cors'
const connectionUrl='mongodb+srv://shivam465:7SaghLuhCCy7FKxF@cluster0.wfihx.mongodb.net/tinderdb?retryWrites=true&w=majority'
app.use(express.json())
app.use(Cors())

mongoose.connect(connectionUrl,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopolofy:true,



})

app.get('/',(req,res)=>res.status(200).send("hello shivam"))

app.post('/tinder/cards',(req,res)=>{
    const dbCard=req.body;
    Cards.create(dbCard,(err,data)=>{
        if (err) {
            res.status(500).send(err);

        }
        else{
            res.status(201).send(data)
        }
    })

})
app.get('/tinder/cards',(req,res)=>{
    Cards.find((err,data)=>{
        if (err) {
            res.status(500).send(err);

        }
        else{
            res.status(200).send(data)
        }
    })

})

app.listen(port,()=>console.log(`listening to the port ${port}`))

