import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import router from "./routes/userRoutes.js";
import dotenv from 'dotenv';


dotenv.config()
const port = process.env.PORT;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/users", router);

// app.get("/", (req, res) => res.send("Server is ready"));

mongoose.connect(
  `${process.env.MONGO_DB_URI}`
)
  ? app.listen(port, () =>
      console.log(`Server started on http://localhost:${port}`)
    )
  : app.listen(port, () =>
  console.log(`Server Connection Error`)
)


