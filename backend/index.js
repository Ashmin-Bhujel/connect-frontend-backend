import { config } from "dotenv";
import express from "express";
import path from "path";

config();
const app = express();
const PORT = process.env.PORT || 5000;
const __dirname = import.meta.dirname;

// "/" endpoint
app.get("/", (req, res) => {
  res.send({ message: "Hello, World" });
});

// "/api/users" endpoint
app.get("/api/users", (req, res) => {
  try {
    res.sendFile(path.join(__dirname, "public/users.json"));
  } catch (error) {
    console.error(`Error on route "/": ${error}`);
    res.status(500).send({ message: "Cannot get data!" });
  }
});

app.listen(PORT, () => {
  console.log("Server is running...");
});
