import express from "express";
import morgan from "morgan";
import cors from "cors";

export default function createServer() {
    const app = express();
    app.use(cors())
    app.use(express.json());

    app.use(morgan("tiny"));

    // setupJWTStrategy(passport);

    // app.use("/auth", authRouter);
    // app.use("/books", bookRouter(passport));

    return app;
}