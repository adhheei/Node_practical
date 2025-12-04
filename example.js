// import { error } from 'console'
// import fs from 'fs'

// fs.writeFile('ex.txt','this is a example for writefile',(err) => {
//     if (err){
//         throw new error 
//     }else{
//         console.log('file is created')
//     }
// })



// const { error } =  require('console');
// const fs = require('fs');

// fs.readFile('ex.txt','utf-8',(err,data)=>{
//     if (err){
//         throw new error
//     }else{
//         console.log('readed',data)
//     }
// })

// const { error } = require('console')
// const fs =require('fs')

// fs.appendFile('ex.txt','\n appending files',(err) => {
//     if (err) throw new error
//     console.log('appended');
    
// })

const {error} = require('console')
const fs = require('fs')

fs.unlink('ex.txt',(err) =>{
    if(err)throw new error
    console.log('deleted')
})