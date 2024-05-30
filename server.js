const express = require('express')

const app = express()

app.get('/',(req,res)=>{
    res.json({
        status : 200,
        message:"hello world"

    })

})

app.listen(8082,()=>{
    console.log('server runnning on port 8082')

})

