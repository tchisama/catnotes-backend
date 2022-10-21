const express= require("express")
const mongoose = require("mongoose")
const cors = require('cors')

const userRouter = require( "./routes/user/user")
const noteRouter = require( "./routes/note/note")
const bookRouter = require( "./routes/book/book")

const app = express()


mongoose
    .connect("mongodb+srv://admin:admin123@cluster0.te1nh3y.mongodb.net/?retryWrites=true&w=majority")
    .then(()=>{
        console.log('mongodb connected')
    })

app.listen(1337,()=>{ 
    console.log('server runing in port 1337')
})

app.use(express.json())
app.use(cors())
app.use('/user',userRouter)
app.use('/note',noteRouter)
app.use('/book',bookRouter)

