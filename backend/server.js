import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

const port = process.env.PORT || 3002;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/users", userRoutes);

app.get("/", (req, res) => res.send("Server is ready"));

mongoose.connect(
  "mongodb+srv://darnzykay:myiT8U83fT0qqGAf@doclane.s4nfpml.mongodb.net/?retryWrites=true&w=majority"
)
  ? app.listen(port, () =>
      console.log(`Server started on http://localhost:${port}`)
    )
  : app.listen(port, () =>
  console.log(`Server Connection Error`)
)


