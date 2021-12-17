let fs = require("fs");

fs.readFile("info.txt", "utf8", (err, data) => {
  if (err) throw err;
  //console.log(data);
  fs.writeFile("info1.txt", data, (err) => {
    if (err) throw err;
    console.log("Файл записано успешно!!!!");
  });
});
fs.appendFile("info.txt", "\n Привет!!!!", (err) => {
  if (err) throw err;
  console.log("Файл дозаписано успешно!!!!");
});
console.log("HeLLO!!!!");
