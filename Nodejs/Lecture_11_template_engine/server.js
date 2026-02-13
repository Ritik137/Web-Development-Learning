import express from 'express'

const app = express();

let products =[
    {title:'iphone - 16', price:70000},
    {title: 'galaxy s24 ultra',price: 90000 },
    {title: 'google pixel', price:65000}
]
 
app.get('/',(req,res)=>{
    let name = 'ram'
    res.render('index.ejs', {name,products})
})

const port = 2004;
app.listen(port, ()=>{
    console.log(`server is running on port ${port}`)
})
