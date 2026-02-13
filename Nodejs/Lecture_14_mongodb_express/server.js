import express from 'express'
import mongoose from 'mongoose'
const app = express();
mongoose.connect("mongodb+srv://anshritik1_db_user:iqahKwa2MkUBlD7L@cluster0.s9mbrrx.mongodb.net/",{
    dbName: "Nodejs mastery course"
})
.then(()=>{
    console.log("Mongodb connected.. !")
})
.catch((err)=>{
    console.log(err)
})

const port = 1000;
app.listen(port,()=>{
    console.log(`server is running on port ${port}`);

})