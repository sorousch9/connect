import express from "express";
const app = express();
import userRoutes from "./routes/users.js";

app.use("/api/users", userRoutes);
app.listen(8800, () => {
  console.log("API working!");
});
