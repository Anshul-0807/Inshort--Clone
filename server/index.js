import express from "express";
import Connection from "./database/db.js";
import DefaultData from "./default.js";
import route from "./routes/route.js";

const app = express();

// app.use("");

const PORT = 8000;

Connection();

app.listen(PORT, () =>
  console.log(`server running successfully on port ${PORT}`)
);

DefaultData();
