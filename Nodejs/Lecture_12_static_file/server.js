import express from 'express'
import path from 'path'
 

const app = express();
app.get('/',(req,res)=>{
    
// Set EJS as view engine
app.set('view engine', 'ejs');
    res.render('index')
})

app.use(express.static(path.join(path.resolve(), 'public')))

const port = 2006;
app.listen(port,()=>{
    console.log(`server is running on port ${port}`)

})