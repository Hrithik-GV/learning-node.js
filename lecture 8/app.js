const http=require("http");
const errorHandler=require("./error")

const server= http.createServer((req,res)=>{
    console.log(req.url,req.method);
    errorHandler();
})
const PORT=5001;

server.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`)
});