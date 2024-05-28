import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js';

// const mongoDBURL = process.env.MONGODB_URI;


export const connectDB = async () => {
    try {
       const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       console.log(`App connected with DB method 3 !! ${connectionInstance.connection.host}`)
    } catch (error) {
       console.log('MONGODB CONNECTION ERROR 3 : ', error)
    }
}
