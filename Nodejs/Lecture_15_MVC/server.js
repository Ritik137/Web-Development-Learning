// ===============================
// 📦 Import Dependencies
// ===============================
import express from 'express';          // Express framework for building web server
import mongoose from 'mongoose';   
import userRoutes from './Routes/UserRoute.js'
// ===============================
// 🚀 Initialize Express App
// ===============================
const app = express();


app.set('view engine', 'ejs');
app.set('views', './views'); // folder jahan tumhare ejs files hain

// ===============================
// 🛠️ Middleware Setup
// ===============================
// Parse incoming form data (application/x-www-form-urlencoded)
app.use(express.urlencoded({ extended: true }));
// Parse JSON data (application/json)
app.use(express.json());

// ===============================
// 🌐 MongoDB Connection
// ===============================
// Replace with your own cluster credentials & dbName
mongoose.connect(
  'mongodb+srv://anshritik1_db_user:iqahKwa2MkUBlD7L@cluster0.s9mbrrx.mongodb.net/',
  { dbName: "nodejsMasterycourse" }
)
  .then(() => {
    console.log("✅ MongoDb Connected...");
  })
  .catch((error) => {
    console.log("❌ MongoDb Connection Error:", error);
  });

// ===============================
// 🔊 Start Server
// ===============================
const port = 1001;
app.listen(port, () => {
  console.log(`🚀 Server is running on port ${port}`);
});