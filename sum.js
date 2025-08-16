const sumRequestHandler=(req,res)=>{
  console.log("In sum request handler",req.url);
  const body=[];
  req.on('data',chunk =>body.push(chunk));
  req.on('end',()=>{
    const bodyStr=Buffer.concat(body).toString();
    const params=new URLSearchParams(bodyStr);
    const bodyobj=Object.fromEntries(params);
    const result=Number(bodyobj.first) + Number(bodyobj.second);
    console.log(result);
    res.setHeader('Content-Type','text/html');
    res.write(`
    <html>
        <head><title>Practice Set</title></head>
        <body><h1>Your sum is ${result}</h1>
              <a href="/calculator">Go to calculator</a>
        </body>
    </html>`
    );
    return res.end();
  });

  
}
exports.sumRequestHandler = sumRequestHandler 