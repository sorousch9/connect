import express from "express";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";

const app = express();

//middlewares

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.listen(8800, () => {
  console.log("API is running!");
});
