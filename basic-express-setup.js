const express = require('express')
const app = express()

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen
app.get('/', (req, res)=>{
    res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
})
app.get('/about', (req, res)=>{
    res.send('About Page')
})
app.all('*', (req, res)=>{
    res.status(404).send("<h1>Resource not found</h1>")
})
app.listen(5000,()=>{
    console.log("server listening on port 5000...")
})
