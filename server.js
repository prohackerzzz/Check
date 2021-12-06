const express = require('express')
const cors=require('cors')
const path = require('path')

const app = express()
PORT = process.env.PORT || 8300
app.use(cors())

app.get('/add',(req,res)=>{
    const j = parseInt((req.query.a))+parseInt((req.query.b))
    console.log(j)
    console.log("request recieved")
    res.send(res.json(j));
})
if(process.env.NODE_ENV=="production"){
    app.use(express.static("client/build"))
}
app.get("*", function (request, response) {
    response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
  });
  
app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`)
})