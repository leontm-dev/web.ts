// Imports

import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import mongoose from "mongoose";
import env from "dotenv";
import cors from "cors";

// Project-Imports

import router from "router";

// Presets

const app = express();
const server = http.createServer(app);

// Configs

env.config();

app.use(compression());
app.use(cors({ credentials: true }));
app.use(cookieParser());
app.use(bodyParser.json());

mongoose.Promise = Promise;
mongoose.connect(process.env["MONGO_URL"]);
mongoose.connection.on("connection", (stream) =>
  console.log("Database working properly!")
);
mongoose.connection.on("error", (err: Error) => console.log(err));

// Code

server.listen(1000, () => {
  console.log(
    "Server running on local port 1000 with url 'http://localhost:1000/'"
  );
});
