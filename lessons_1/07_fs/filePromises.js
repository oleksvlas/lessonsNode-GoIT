//let fs = require("fs").promises;
let fs = require("fs/promises");

//let data = fs.readFile("info.txt", "utf8");

//data.then((data) => console.log(data)).catch((err) => console.error(err));

(async () => {
  try {
    data = await fs.readFile("info.txt", "utf8");
    //data1 = await fs.rename("info2.js", "info1.js");
    await fs.unlink("info2.js");
    //console.log(data1);
  } catch (err) {
    console.error(err);
  }
})();
