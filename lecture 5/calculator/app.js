const http = require('http')

const requestHandler=require('./requestHandler')
const server=http.createServer(requestHandler)

const PORT =5000;
server.listen(PORT,()=>{
    console.log(`server running at http://localhost:${PORT}`);
})
