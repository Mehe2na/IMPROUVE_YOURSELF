//const http=require('http') /*we'll use when we have to handle hhtp requests*/
//
const express = require("express")
const app=express()
const bodyParser =require('body-parser')
import groupRouter from './routes/groupRoutes'
import adminRouter from './routes/adminRoutes'
import userRouter from './routes/userRoutes'
import challengeRouter from './routes/challengeRoutes'
import todoRouter from './routes/todoRoutes'
import messageRouter from './routes/messageRoutes'
import path from 'path'

app.set('view engine', 'pug')
app.set('views',path.join(__dirname,'./views'))


app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use('/groups',groupRouter)
app.use('/users',userRouter)
app.use('/admins',adminRouter)
app.use('/challenges',challengeRouter)
app.use('/todos',todoRouter)
app.use('/messages',messageRouter)


console.log('it works')

app.listen(3100)