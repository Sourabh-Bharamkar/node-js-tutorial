const http=require('http')

const server=http.createServer((req,res)=>{

    res.end('<h1>Sourabh Bharamkar<h1>')

})

server.listen('4000',()=>{
    console.log('sever is listening on port 4000')
})