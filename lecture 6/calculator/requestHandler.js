const sumRequestHandler=require('./sum')

const requesthandler=((req,res)=>{
    console.log(req.url,req.method)
    if(req.url=='/'){
        res.setHeader('content-type','text/html');
        res.write(`<html>
            <head><title>home</title></head>
            <body>
            <h3>welcome to calculator</h3>
            <a href="/calculator">go to calculator</a>
            </body>
            </html>`)
            return res.end();
    }
    else if(req.url.toLowerCase()=='/calculator'){
        res.setHeader('content-type','text/html');
        res.write(`<html>
            <head><title>home</title></head>
            <body>
            <h3>calculator</h3>
            <form action='/calculator-result' method ="POST">
            <input type="number" name="first" placeholder="enter the first number"><br></br>
            <input type="number" name="second" placeholder="enter the second number"><br></br>
            <input type="submit" value="sum">
            </form>
            </body>
            </html>`)
            return res.end();
    }

    else if(req.url.toLowerCase()=='/calculator-result' && req.method=="POST"){
        return sumRequestHandler(req,res)
    }
    res.setHeader("content-type",'text/html');
    res.write(`<html>
        <head>
        <title>page not found</title>
        </head>
        <body>
        <h3>error 404! page doesnt exist</h3>
        <a href="/">go to home</a>
        </body>
        </html>
        `)

})
module.exports=requesthandler

