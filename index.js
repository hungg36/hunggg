import http from "http";
const port = process.env.PORT || 3000;
http.createServer((req, res) => {
  res.end("Hello from Render VPS!");
}).listen(port, () => console.log("Server started on port", port));
