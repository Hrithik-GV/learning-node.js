// const http=require('http');
// const server=http.createServer((req,res)=>{
//     console.log(req.url,req.method,req.header);
//    // process.exit();
// })
// const PORT=3000
// server.listen(PORT,()=>{
//     console.log(`server running at http://localhost:${PORT}`);
// });


const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
    if (req.url == '/') {
        res.setHeader('content-type', 'text/html');
        res.write(`<html>
            <head><title>about</title></head>
            <body>
            <form action="/submit-details" method="POST">
            <input type="text" id="name" name="name" placeholder="enter your name"> <br><br>

            <label for="gender">gender:</label>

            <input type="radio" id="male" name="gender" value="male">
            <label for="male">male</label>
            <input type="radio" id="female" name="gender" value="female">
            <label for="female">female</label><br><br>
            <input type="submit" value="submit">

            </form>
            </body>
        </html>`)
        return res.end();
    } else if (req.url === "/notes") {
        res.setHeader('content-type', 'text/html');
        res.write('<html>')
        res.write('<head><title>sending  reposnse to server</title></head>')
        res.write('<body><h2> nodejs node 1)intro 2)creating first server 3)sending response 4)routing request </h2></body>')
        res.write('</html>')
        return res.end();

    } else if (req.url.toLowerCase() === "/submit-details" && req.method == "POST") {
        fs.writeFileSync('user.txt', 'hrithik');
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }
    res.setHeader('content-type', 'text/html');
    res.write('<html>')
    res.write('<head><title>node</title></head>')
    res.write('<body><h2> learn node.js </h2></body>')
    res.write('</html>')
    return res.end();
})
const PORT = 3005;
server.listen(PORT, () => {
    console.log(`server running at http://localhost:${PORT}`);
});



