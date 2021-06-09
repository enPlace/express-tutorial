const http = require('http')

const server = http.createServer((req,res)=>{
    //console.log(req.method)
    if(req.url ==='/'){
    res.writeHead(200, {'content-type':'text/html'})
    res.write("<h1>homies page</h1>")
    res.end()
    }else if (req.url === '/about'){

    }else{
        res.writeHead(404, {'content-type':'text/html'})
        res.write("sorry buds")
        res.end()
    }

})

server.listen(5000,()=>{
    console.log("server open")
    
})