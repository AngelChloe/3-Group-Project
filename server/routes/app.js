// const router = require("express").Router();
// const apiRoutes = require("./api");
// const authRoutes = require("./../authentication");



// module.exports = router;

import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routing/user-routes";
import pasttripsRouter from "./routing/pasttrips-routes";
import cors from "cors";

const app = express();
dotenv.config();

// middlewares
app.use(cors());
app.use(express.json());
app.use("/user", userRouter);
app.use("/pasttrips", pasttripsRouter);

// connections
mongoose
  .connect(
    `mongodb+srv://admin:${process.env.MONGODB_PASSWORD}@cluster0.lmtecrc.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() =>
    app.listen(3000, () =>
      console.log("Connection Succesfull  & Listening to localhost Port 3000")
    )
  )
  .catch((err) => console.log(err));