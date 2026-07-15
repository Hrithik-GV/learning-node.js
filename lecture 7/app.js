const http=require('http');

const server=http.createServer((req,res)=>{
    console.log(req.url,req.method);
    console.log("hello world");
    console.log("welcome to express.js");
    console.log("hello world");
})
const PORT=8001;
server.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
})