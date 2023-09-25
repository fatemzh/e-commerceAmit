const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()
app.use(cors())
app.use(express.json({limit: "10mb"}))
 
const PORT = process.env.PORT || 8080

//mongodb connection
console.log(process.env.MONGO_DB_URL)
mongoose.connect()

//api
app.get('/', (req, res) =>{
    res.send("Server is running")
})

app.post("/signup",(req,res) => {
    console.log(req.body)
})

app.listen(PORT, () => console.log("server is running at port : " + PORT))