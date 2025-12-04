const fs =require ('fs')

fs.writeFile('node.txt',
    'hello node.js',(err)=>{
        if (err){
            throw new Error(err)
        }
        console.log("file created")
    }
)