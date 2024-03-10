
const fs = require('fs');
const express = require("express")
const  app = express();

const folderPath = "./Newfolder"

const PORT =  1000;




app.post( '/submit', (req, res) => {

   if(!fs.existsSync(folderPath)){
       fs.mkdirSync(folderPath)
   }

   const Content = new Date()
   const datetime = Content.toString().replace(/:/g,"-");
  const fileName = "date-time";
    fs.writeFile(`${folderPath}/${fileName}.txt`,
    datetime,(err)=>{
        if(err){
         console.log("Error creating file",err)
        }
       else{
         console.log("File created successfully")
         res.send("File created successfully")
       }
         
     })
}
)


app.get( '/getfile', (req, res) => {


   fs.readdir(`${folderPath}`,
   (err,files)=>{
       if(err){
        console.log("Error creating file",err)
       }
      else{
        
        res.json(files)
      }
        
    })
}
)



app.listen(PORT,()=>{
    console.log(`server is running port ${PORT}`)
})

