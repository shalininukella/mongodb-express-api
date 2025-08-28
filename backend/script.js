import mongoose from "mongoose";
import express from "express";
import users from "./routes/users.js";
import dotenv from "dotenv";
import cors from "cors";
import { logger } from './middlewares/logger.js'
import { errorHandler } from "./middlewares/errorHandler.js";
import { notFound } from "./middlewares/notFound.js";

dotenv.config();
const PORT = process.env.PORT || 8000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("connected"))
  .catch((err) => console.log("error in connecting"));

const app = express();

// Allow all origins (good for development)
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: true}));

//logger middleware
app.use(logger);

//route handler
app.use("/api/users", users);

//fallback error 
app.use(notFound)

//error handler middleware
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
