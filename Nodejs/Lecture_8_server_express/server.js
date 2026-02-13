import express from 'express'

const app = express();

app.get('/home',(req, res)=>{
    res.send("you are requested for home route..")
})

app.get('/srk',(req,res)=>{
    res.send("here is the some info about the srk... ")
})

const port = 5000;
app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})