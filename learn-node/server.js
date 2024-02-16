const http = require("http");

// Create a server object
const server = http.createServer((req, res) => {
  // Set the response HTTP header with HTTP status and content type
  res.writeHead(200, { "Content-Type": "text/plain" });

  // Send the response body "Hello, World!"
  res.end("Hello, World!\n Welcome, FSDWD-2 Tamil Batch People!!!");
});

// The server listens on port 3000
server.listen(3000, () => {
  console.log("Server is running at http://localhost:3000/");
});
