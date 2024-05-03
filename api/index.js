import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.routes.js";
import authRouter from "./routes/auth.route.js";
dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log(`connected to mongoDb`);
  })
  .catch((err) => console.log(err));

const app = express();

app.use(express.json()); //allow json as input of the server

app.listen(3000, () => {
  console.log(`server is running on port 3000!!`);
});

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
