import express from "express";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";

import cors from "cors";
import multer from "multer";
import cookieParser from "cookie-parser";

const app = express();

//middlewares
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true);
  next();
});
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(cookieParser());


app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

app.listen(8800, () => {
  console.log("API is running!");
});
