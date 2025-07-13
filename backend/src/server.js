import express from 'express';
import { ENV } from './config/env.js';
import { connectDB } from './config/db.js';

const app = express();

connectDB();

app.get("/", (req, res) => res.send("Welcome to the Connect Global API"));

// app.listen(ENV.PORT, () => console.log("Server is running on port",  ENV.PORT));

const startServer  = async () => {
    try {
        await connectDB();

        app.listen(ENV.PORT, () => console.log("Server is up and running on Port:", ENV.PORT));
    } catch (error) {
      console.error("Failed to start server: ", error.massage);
      process.exit(1);
    }
};

startServer();

