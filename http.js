const http = require('http');

const server = http.createServer((req, res)=> {
    if(req.url === "/"){
        res.end("welcome home")
        return;
    }
    if(req.url === "/about"){
        res.end(" This is about page")
        return;
    }
    res.end(`
        <h1>Opps</h1>
        <p>We seems to can't find the page you are looking for</p>
        <a href="/">Back home </a><br>
        <a href="/about">Back to page about </a>

    `)
})

server.listen(5001, () => {
    console.log("Server running on http://localhost:5001");
});