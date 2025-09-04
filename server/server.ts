import { v2 as cloudinary } from "cloudinary";
import http from "http";
import connectDB from "./utils/db";
import { initSocketServer } from "./socketServer";
import { app } from "./app";
require("dotenv").config();
const server = http.createServer(app);

// edits
// cloudinary config
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME || "daa8gag2g",
  api_key: process.env.CLOUD_API_KEY || "854896987853316",
  api_secret: process.env.CLOUD_SECRET_KEY || "x_NWERNTAUpQ7FPIWqvugrtHU_k",
});

initSocketServer(server);

const PORT = process.env.PORT || 5000;

// create server
server.listen(PORT, () => {
  console.log(`Server is connected with port ${PORT}`);
  connectDB();
});
