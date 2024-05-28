import express from 'express';
// import mongoose from 'mongoose';
import dotenv from 'dotenv';
// import { DB_NAME } from './constants.js';
import { connectDB } from './db/index.js';

dotenv.config();
const app = express();
connectDB();

const port = process.env.PORT;
// const mongoDBURL = process.env.MONGODB_URI;


/*
//DATABASE CONNECTION , METHOD 1 :-
mongoose.connect(mongoDBURL)
.then(() => { console.log('App connected with DB method 1')} )
.catch((error) => {console.error('MONGODB CONNECTION ERROR 1 : ', error)});
*/


/*
//DATABASE CONNECTION , METHOD 2 :-
(async () => {
     try {
        await mongoose.connect(`${mongoDBURL}/${DB_NAME}`)
        console.log('App connected with DB method 2')
     } catch (error) {
        console.log('MONGODB CONNECTION ERROR 2 : ', error)
     }
})()
*/





app.get('/', (req, res) => {
    res.send('THIS IS THE HOMEPAGE');
  });

app.listen(port, () => {
    console.log(`App is running on port ${port}`);
  });