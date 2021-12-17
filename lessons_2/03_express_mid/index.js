const express = require("express");
const PORT = 3030;
const app = express();
let numb = 1;

// app.use("/", (req, res, next) => {
//   numb = numb + 1;
//   next();
// });
// app.use((req, res, next) => {
//   console.log(`${req.method} ${req.url} ${Date.now()}`);
//   next();
// });
app.use(express.static("public"));
app.use("/formAction", express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.send(numb.toString());
});

app.get("/user", (req, res) => {
  res.send("User");
});

app.get("/file", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.use("/json", express.json());
app.post("/json", (req, res) => {
  console.log(req.body.);
  res.send("OK!");
});

app.post("/formAction", (req, res) => {
  console.log(req.body);
  res.send("Ok!");
});

app.listen(PORT, () => {
  console.log(`Server start on ${PORT}`);
});