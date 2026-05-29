// const http=require('http');
// const server=http.createServer((req,res)=>{
//     console.log(req.url,req.method,req.header);
//    // process.exit();
// })
// const PORT=3000
// server.listen(PORT,()=>{
//     console.log(`server running at http://localhost:${PORT}`);
// });


const http=require('http');
const server=http.createServer((req,res)=>{
    res.setHeader('content-type','text/html');
    res.write('<html>')
    res.write('<head><title>sending  reposnse to server</title></head>')
    res.write('<body><h2> learn node.js </h2></body>')
    res.write('</html>')
})
const PORT=3000
server.listen(PORT,()=>{
    console.log(`server running at http://localhost:${PORT}`);
});