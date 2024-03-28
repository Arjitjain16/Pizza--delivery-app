const express = require("express")
const app = express()
require('dotenv').config()
const mongoose = require('mongoose')
// const dbConnect = require('./util/mongo')
// dbConnect()
var PORT = 5000 ||  process.env.PORT



app.use(express.json())



function dbConnect(){
    try {
      mongoose.connect(process.env.MONGO_URI);
      const db = mongoose.connection;
    
      // Event handlers for connection
      db.on('error', console.error.bind(console, 'MongoDB connection error:'));
      db.once('open', () => {
        console.log('Connected to MongoDB');
        // You can start using your database here
      });
    } catch (error) {
      console.error(error);
    }
    
  }
  dbConnect()







app.listen(PORT, ()=> console.log("listening on Port 5000"))