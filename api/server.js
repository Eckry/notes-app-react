import express from "express"
import mongoose from "mongoose"

app = express();
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/todos", () => console.log("Connected to MongoDB"));

const PORT = process.env.PORT ?? 3001

app.listen(PORT, () => console.log("Server initialized"));