import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config() 
import express from "express";
import morgan from "morgan";
import cors from "cors";
import mongoose from "mongoose";

const db = process.env.DATABASE_URL;

export default function createServer() {
    //connects mongoose to mongodb database
    mongoose.set("strictQuery", false);
    mongoose.set('bufferCommands', false);

    mongoose.connect(db);
    mongoose.connection.on('error', (err) => {
        console.log(err);
    });
    const app = express();
    app.use(cors())
    app.use(express.json());

    app.use(morgan("tiny"));

    // setupJWTStrategy(passport);

    // app.use("/auth", authRouter);
    // app.use("/books", bookRouter(passport));

    return app;
}