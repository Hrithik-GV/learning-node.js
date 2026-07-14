const sumRequestHandler = (req, res) => {
  console.log("1 In sum request handler",req.url);
  console.log(req.url);
  const body = [];
  let result;

  req.on("data", (chunk) => {
    console.log(chunk);
    body.push(chunk);
    console.log("2 chunk ")
  });
  req.on("end", () => {
    const fullbody = Buffer.concat(body).toString();
    console.log(fullbody);
    const params = new URLSearchParams(fullbody);
    // const bodyObject = {}
    // for (const [key, value] of params.entries())
    //     bodyObject[key] = value;
    // console.log(bodyObject);
    const bodyObject = Object.fromEntries(params);
    result = Number(bodyObject.first) + Number(bodyObject.second);
    console.log(result);
    console.log("3 end event")

   
  });
  console.log("4 sending the response")
  res.setHeader("content-type", "text/html");
    res.write(`<html>
                <head>
                <title>calculator-result</title>
                </head>
                <body>
                <h3>result is ${result}</h3>
                </body>
                </html>
            `);
             return res.end();
};
module.exports = sumRequestHandler;
