const fs = require("fs");

// const txtIn = fs.readFileSync("./txt/random.txt", "utf-8");
// console.log(txtIn);

// const txtOut = `This is added text : ${txtIn}.\nCreated on ${Date.now()}`;
// fs.writeFileSync("./txt/output.txt", txtOut);

// console.log("File Written");

// fs.readFile("./txt/readThis.txt", "utf-8", (err, data) => {
//   console.log(data);
// });
// console.log("object")
const http = require("http");
// const server = http.createServer((req, res) => {
//   res.end("Hello from Server");
// });

// server.listen(8000, "127.0.0.1", () => {
//   console.log("Listening");
// });

http.createServer(function (req, res) {
    res.write("Hello From Server 8000");
    res.end();
  }).listen(8080);
