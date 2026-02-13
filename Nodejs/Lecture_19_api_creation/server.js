import express from 'express'
import mongoose from 'mongoose';
import UserRouter from './Routes/UserRoute.js'
import contactRouter from './Routes/ContactRoutes.js'
const app = express();

app.use(express.json());          // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing form data


// home route
app.get('/',(req,res)=>{
    res.json({message : 'This is home route.'})
})

app.use('/api/user', UserRouter)
app.use('/api/contact',contactRouter )


mongoose.connect('mongodb+srv://anshritik1_db_user:iqahKwa2MkUBlD7L@cluster0.s9mbrrx.mongodb.net/',
  { dbName: "API_creation" })
  .then(()=>{
    console.log("mongodb connected..")
  })
  .catch((error)=>{
    console.error("mongodb not connected", error)
  })


const port = 2001;
app.listen(port,()=>{
    console.log(`server is running on port ${port}`);

})