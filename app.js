const http=require("http");
http.createServer((req, res) => {
    if (req.url === "/") {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify({ message: "hello world" }));
    } else if (req.url === "/about") {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify({ message: "About us" }));
    } else if (req.url === "/services") {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify({ message: "Our services" }));
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify({ error: "Page not found" }));
    }
    res.end();
}).listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});

