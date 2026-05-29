//const { log } = require('console');
const fs=require('fs');
fs.writeFile("output.txt","writing a file",(err)=>{
    if(err){
        console.log("error ocuured")
    }
    else{
    console.log("file created succesfully");
    
    }
});
