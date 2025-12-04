// const EventEmitter = require('events')
// const emitter =new EventEmitter();

// emitter.on('greet',()=>{
//     console.log(`hello guys`)
// })

// emitter.emit('greet')

// console.log(__dirname);
// console.log(__filename);


// const http =require('http')
// const server = http.createServer((req,res)=>{
//     res.end("hello node")
// })

// server.listen(3000,()=>{
//     console.log(`server is runnin on http://localhost:3000`)
// })


// const express = require('express')
// const app =express()

// app.get('/',(req,res)=>{
//     res.send('hello broo');
// })
// app.listen(4000,()=>{
//     console.log('your server is running on http://localhost:4000');
    
// })


// const { error } = require('console')
// const fs = require('fs')

// fs.writeFile(
//     'ex.txt',
//     'hello node',
//     (err)=>{
//         if(err) {
//             throw new error(err)
//         }
//         console.log("file successfull")
//     })


// const fs = require('fs')

// fs.readFile('../express/ex.txt','utf-8',(err,data)=>{
    //     if(err){
        //         throw new Error(err)
        //     }else{
            //         console.log(data)
            //     }
            // })
            
            
// const fs = require('fs')            
// fs.appendFile('ex.txt','\n iam adhi',(err)=>{
    //         if(err){
        //                 throw new Error(err)
        //         }
        //         console.log('updated succefully')
        // })
        
        
// const fs = require('fs')  

// fs.unlink ('ex.txt',(err)=>{
//     console.log("file deleted succefully")
// })   

// const express = require('express')

// const app = express()

// app.use((req,res,next)=>{
//     console.log("this run for every request")
//     next();
// })

// app.get('/',(req,res)=>{
//     res.send('landing page')
//     console.log('landing page')
    
// })
// app.get('/1',(req,res)=>{
//     res.send('first page')
//     console.log('landing page')
// })
// app.get('/2',(req,res)=>{
//     res.send('second page')
//     console.log('landing page')
// })

// app.listen(3000,()=>{
//     console.log("server run on http://localhost:3000");
    
// })


// const express = require('express')

// const app = express()

// app.get('/',(req,res,next)=>{
//     res.send('landing page')
//     console.log('middleware worked')
//     next()
    
// })
// app.get('/1',(req,res,next)=>{
//     res.send('first page')
//     console.log('middleware worked')
//     next()
// })
// app.get('/2',(req,res,next)=>{
//     res.send('second page')
//     console.log('middleware worked')
//     next()
// })

// app.listen(3000,()=>{
//     console.log("server run on http://localhost:3000");
    
// })

const express = require('express');
const app = express();

app.get('/', (req ,res)=>{
    res.send("home page");
})

app.get('/make-error',()=>{
    throw new Error("This is forced error");
})

app.use((err,req,res,next)=>{
    res.status(500).send("oops an error occured")
})

app.listen(3000,()=>{
    console.log("http://localhost:3000")
})