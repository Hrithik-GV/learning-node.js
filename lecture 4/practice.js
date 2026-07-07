//practice set

const http = require("http");
const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
    res.setHeader('content-type', 'text/html');
    if (req.url == "/men") {
        res.write(`<h1>men</h1>`);
        return res.end();
    }
    if (req.url == "/women") {
        res.write(`<h1>women</h1>`);
        return res.end();
    }
    if (req.url == "/kids") {
        res.write(`<h1>kids</h1>`);
        return res.end();
    }
    if (req.url == "/cart") {
        res.write(`<h1>cart</h1>`);
        return res.end();
    }
    if (req.url == "/home") {
        res.write(`<h1>home</h1>`);
        return res.end();
    }
    res.write(`<html>
        <head><title> myntra</title></head>
        <body>
           <nav>
           <ul>
           <li><a href="/home">home</a></li>
           <li><a href="/men">men</a></li>
           <li><a href="/women">women</a></li>
           <li><a href="/kids">kids</a></li>
           <li><a href="/cart">cart</a></li>
           
           </ul> 
           </nav>
        </body>
        </html>`)
    return res.end();
})

server.listen(3005, () => {
    console.log(`http://localhost:3005`);
})
