// const fs = require('fs')
// fs.writeFile(
//     'writefile.js',
//     'Hello node js',
//     (err) => {
//         if(err){
//             throw new Error(err)
//         }
//         console.log("file write successfuly")
//     })


// const fs = require('fs')
// console.log("start");

// fs.readFile(
//     './readfile.json',
//     'utf-8',
//     (err,data) => {
//         if(err){
//             throw new Error(err)
//         }else{
//             console.log(data)
//         }
//     }
// )

// console.log("end");


// const fs = require('fs')
// console.log("start")
// const res =fs.readFileSync(
//     './readfile.json',
//     'utf-8',
// )
// console.log(res)
// console.log("end")

const { error } = require('console')
const fs = require('fs')

const res = fs.readFile (
    './readfile.json',
    'utf-8',
    (err,data)=>{
    if(err){
        throw new error(err)
    }else{
        console.log("successful",data)
    }
})
console.log(res)