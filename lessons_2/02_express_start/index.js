const express = require("express");
const text = require("./text.json");
const app = express();

app.get("/", (req, res) => {
  res.status(404);
  res.send("Welcome!!!!!");
});
app.get("/about", (req, res) => {
  res.send("About");
});

app.post("/about", (req, res) => {
  res.send("About POST");
});
app.get("/json", (req, res) => {
  res.json(text);
});

app.listen(3030, () => {
  console.log("Server starting....");
});
