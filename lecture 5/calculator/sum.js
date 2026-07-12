const sumRequestHandler = (req, res) => {
  console.log(req.url);
  const body = [];
  req.on("data", (chunk) => {
    console.log(chunk);
    body.push(chunk);
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
    const result = Number(bodyObject.first) + Number(bodyObject.second);
    console.log(result);

    res.setHeader("content-type", "text/html");
    res.write(`<html>
                <head>
                <title>calculator-result</title>
                </head>
                <body>
                <h3>result of ${Number(bodyObject.first)} and ${Number(bodyObject.second)} is ${result}</h3>
                </body>
                </html>
            `);
             return res.end();
  });
 
};
module.exports = sumRequestHandler;
