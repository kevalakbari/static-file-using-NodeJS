const express = require("express")
const path = require("path")

const app =express()
const port= process.env.PORT || 8000

const static_path= path.join(__dirname ,"../public")

app.use(express.static(static_path))

// App.get is normally not work. it will work if our static file have some error and not work
app.get("/", (req, res)=>{
    res.send("this is our home page")
    console.log("get is connected")
})

app.listen(port, ()=>{
    console.log(`app is running at ${port}`)
})