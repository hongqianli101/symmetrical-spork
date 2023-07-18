const http = require("http");
const host = 'localhost';
const port = 8000;
const fs = require('fs').promises
fs.readFile(__dirname + "/index.html")
const requestListener = (req, res) => {
    fs.readFile(__dirname + "/index.html")
    .then(content => {
      res.setHeader("Content-Type", "text/html")
      res.writeHead(200)
      res.end(content)
    })
   }
const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
