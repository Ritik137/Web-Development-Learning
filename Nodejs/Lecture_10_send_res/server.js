import express from 'express'
import path from 'path'
const app = express();

const products = [
    {title: 'iphone - 15', price:75000},
    {title: 'oneplus - 12', price:45000},
    {title: 'google pixel ', price:55000}

]


// send response
// app.get('/',(req,res)=>{
//     res.json({
//         message:'fetched all products',
//         jo_chahiye: 'de sakte hai',
//         products: products,
//         success: true,
//         })
// })

// app.get('/get',(req,res)=>{
//     res.send("<h3>this is send by html h3 tag</h3>")

// })

app.get('/',(req,res)=>{
    const dir = path.resolve();
    console.log(dir);
    const url = path.join(dir,'./index.html');
    res.sendFile(url)
    console.log(url);
})




const port = 2002;
app.listen(port ,()=>{
    console.log(`the server is running on port ${port}`)
})