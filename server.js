import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();

const PORT = process.env.PORT || 3000;
const MESSAGE = process.env.MESSAGE || "Hello from Express on EC2!";

app.get("/", (req, res) => {
  res.send(`<h2>${MESSAGE}</h2>`);
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
