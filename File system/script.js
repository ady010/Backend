const { isUtf8 } = require("buffer")
const fs = require("fs")

//folder creation
// fs.mkdir("./newDirectory",(err)=>{
//    if(err) console.log('Error')
//     else console.log('Folder Created')
// })

//file creation
// const data = new Uint8Array(Buffer.from('Hello Node.js'));
// fs.writeFile("./newDirectory/read.txt",data,(err)=>{
//     if(err) console.log('err');
//     else console.log('File Created')
// })

//read file
// fs.readFile("./newDirectory/read.txt",'Utf8', (err,data)=>{
//     if(err) console.err('Error');
    // console.log('file content:',data)
// })

fs.rm("./newDirectory/read.text",(err)=>{
    if(err) console.err('Error removing')
        else console.log('File removed',data);
})
