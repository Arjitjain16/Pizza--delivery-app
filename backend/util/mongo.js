// import mongoose from 'mongoose'
// import dotenv from 'dotenv';
// dotenv.config();

const mongoose = require('mongoose')
const dotenv = require('dotenv');
dotenv.config

// const MONGO_URI = process.env.MONGO_URI

// if (!MONGO_URI) {
//   throw new Error(
//     'Please define the MONGO_URI environment variable inside .env.local'
//   )
// }
// else{
//   console.log("connected to db")
// }

// /**
//  * Global is used here to maintain a cached connection across hot reloads
//  * in development. This prevents connections growing exponentially
//  * during API Route usage.
//  */
// let cached = global.mongoose

// if (!cached) {
//   cached = global.mongoose = { conn: null, promise: null }
// }

// async function dbConnect() {
//   if (cached.conn) {
//     return cached.conn
//   }

//   if (!cached.promise) {
//     const opts = {
//       bufferCommands: false,
//     }

//     cached.promise = mongoose.connect(MONGO_URI, opts).then((mongoose) => {
//       return mongoose
//     })
//   }
//   cached.conn = await cached.promise
//   return cached.conn
// }



function dbConnect(){
  try {
    mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });
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


// export default dbConnect

module.exports = dbConnect
