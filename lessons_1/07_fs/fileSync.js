let fs = require("fs");

fs.readFile("info.txt", "utf8", (err, data) => {
  console.log(data);
});

console.log("1");
console.log("2");
console.log("3");
