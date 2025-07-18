import mongoose from 'mongoose';
import { ENV } from './env.js';

export const connectDB = async () => {
    try{
        await mongoose.connect(ENV.MONGO_URI);
        console.log('MongoDB connected successfully ✔');
    } catch (error) {
        console.log("Error connecting to MongoDB:", error);
        process.exit(1); // Exit the process with failure
    }
}