const http = require('http');
const module1 = require('./module1');
const module2 = require('./module2');

const hostname = '127.0.0.1';//localhost
const port = 8000;

const server = http.createServer((req, res)=>{
    const aVariable = "this is a new variable";

    const val = module1.changeVar(aVariable);

    module1.printName(aVariable);
    module1.printHello();
    res.end(val);
});

server.listen(port, hostname,()=>{

   console.log("web is running",port);
});