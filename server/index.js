import express, { json } from "express";
import "dotenv/config";
import { PORT, configfileUpload } from "./utils/config.js";


const app = express();
app.use(json());


app.listen(PORT);
console.log(`Corriendo servidor en el puerto ${PORT} 🌪`);
