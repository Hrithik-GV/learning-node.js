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
    if(req.url=='/'){
        res.setHeader('content-type','text/html');
    res.write('<html>')
    res.write('<head><title>sending  reposnse to server</title></head>')
    res.write('<body><h2> using nodejs for backend </h2></body>')
    return res.write('</html>')
    }else if(req.url="notes"){
         res.setHeader('content-type','text/html');
    res.write('<html>')
    res.write('<head><title>sending  reposnse to server</title></head>')
    res.write('<body><h2> nodejs node 1)intro 2)creating first server 3)sending response 4)routing request </h2></body>')
    return res.write('</html>')

    }
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