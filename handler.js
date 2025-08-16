const {sumRequestHandler}=require('./sum')


const requestHandler=(req,res)=>{
  console.log(req.url,req.method);
  if(req.url==='/'){
    res.setHeader('Content-Type','text/html');
    res.write(`
    <html>
        <head><title>Practice Set</title></head>
        <body><h1>Welcome to calculator</h1>
              <a href="/calculator">Go to calculator</a>
        </body>
    </html>`
    );
    return res.end();

  }
  else if(req.url.toLowerCase()==='/calculator'){
    res.setHeader('Content-Type','text/html');
    res.write(`
    <html>
        <head><title>Practice Set</title></head>
        <body><h1>Here is the calculator</h1>
        <form method=POST action="/calculate-result">
             <input type="text" placeholder="First Num" name="first"/>
             <input type="text" placeholder="Second Num" name="second"/>
             <input type="submit" value="Sum" />
        </form>
        </body>
    </html>`
    );
    return res.end();
  }
  else if(req.url==='/calculate-result'&& req.method==='POST'){
   return sumRequestHandler(req,res);
  }



  res.setHeader('Content-Type','text/html');
    res.write(`
    <html>
        <head><title>Practice Set</title></head>
        <body><h1>404 Page does not exist</h1>
              <a href="/calculator">Go to calculator</a>
        </body>
    </html>`
    );
    return res.end();
}
exports.requestHandler=requestHandler;