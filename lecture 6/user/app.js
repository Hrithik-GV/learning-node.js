const http = require('http');

const userRequest=require('./user')

const server = http.createServer(userRequest)

const PORT = 3005;
server.listen(PORT, () => {
    console.log(`server running at http://localhost:${PORT}`);
});

