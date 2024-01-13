import mongoose from "mongoose";

const MONGO_URI = 'mongodb://localhost:27017/tsc-users'

export async function dbConnect() {
    try {
        await mongoose.connect(MONGO_URI);
        console.log('db connected');        
    } catch (err) {
        throw err;
    }
}