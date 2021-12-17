const http = require("http");
const fs = require("fs/promises");

async function requestHandler(request, response) {
  if(request.method === "GET") {
    
  }
  if (request.url === "/about") {
    response.end("<h1>About</h1>");
  } else if (request.url === "/file") {
    let text = await fs.readFile("index.html", "utf8");
    response.end(text);
  }
  response.setHeader("Content-Type", "text/plain");
  response.end("<h1>Welcome!!!</h1>");
}
//http - 80
//https - 443

let server = http.createServer(requestHandler);

server.listen(3030, () => {
  console.log("Server starting...");
});
