import express from 'express'

const app = express();


// C = create => Post(method)
// R = read => get(Method)
// U = update => put(method)
// D = delete => Delete(method)

app.get('/get/suman',(req,res)=>{
    res.send("this is response..")
})

app.post('/instagram_post',(req,res)=>{

})

const port = 2001;


app.listen(port, ()=>{
    console.log(`Server is runnning on port ${port}`)
})