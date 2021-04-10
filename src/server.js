import express from "express";
import cors from "cors";
import path from "path";
import dotenv from "dotenv";
import Routes from "./api/index.js";
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import mongoose from "mongoose";

const app = express();
const PORT = 5000;

const __dirname = dirname(fileURLToPath(import.meta.url));

dotenv.config();

// middleware
app.use(express.json());
app.use(express.urlencoded());

app.use(cors({
   origin: "*",
   optionsSuccessStatus: 200
}));

app.get('/', (req, res) => {
   res.sendFile(__dirname + "/public/index.html");
});

app.use(express.static(path.join(__dirname, "/public")));
app.listen(PORT, () => {
   console.log("Listening to port: " + PORT);
})

await mongoose.connect(process.env.MONGO_SERVER, {
   poolSize: 10,
   useNewUrlParser: true,
   useUnifiedTopology: true,
   autoIndex: false,
});

// Sets routes
Routes(app);
