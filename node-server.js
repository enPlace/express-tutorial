const http = require('http')
const fs = require('fs')

//get all files
const homePage = fs.readFileSync('./navbar-app/index.html') //this only runs when we instantiate the server, not each time it is called. 


const server = http.createServer((req,res)=>{
    //console.log(req.method)
    if(req.url ==='/'){
    res.writeHead(200, {'content-type':'text/html'})
    res.write(homePage)
    res.end()
    }else if (req.url === '/about'){
        res.end()

    }else{
        res.writeHead(404, {'content-type':'text/html'})
        res.write("sorry buds")
        res.end()
    }

})

server.listen(5000,()=>{
    console.log("server open")
    
})