import express from "express";
const app = express();
const PORT = 6969;
import * as dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import signUp from "./routes/signUpRoute.js";

app.use(cors());
app.get("/", (req, res) => {
  res.send("working");
});

dotenv.config();
mongoose.connect(process.env.DB_URL);
const db = mongoose.connection;
db.on("error", (errorMessage) => console.log(errorMessage));
db.once("open", () => console.log("connected successfully to the database"));

app.use(express.json());

app.use("/api/v1/signup", signUp);

app.listen(PORT, () => {
  console.log(`server running in http://localhost:${PORT}`);
});
