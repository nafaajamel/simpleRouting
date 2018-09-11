const express = require('express')

const app = express()

app.use((req,res,next)=>{

    let hour = new Date().getHours()

  if(hour<8 || hour >17){

      res.send("<h1>Our office is not open now</h1>")
  }
  
    next()
})

app.use(express.static('public'))

app.get('/*',(req,res)=>{
   
        res.sendFile(__dirname+ '/public/home.html')
 
})



app.listen(3000,'localhost')

