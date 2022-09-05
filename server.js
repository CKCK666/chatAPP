const express =require("express")
const app=express()
const path=require("path")
const http=require("http")
const server=http.createServer(app)

const socketio=require("socket.io")
const io=socketio(server)
//Set static file

app.use(express.static(path.join(__dirname,"public")))

//Run when new user  connect
io.on("connection",(socket)=>{
    console.log("new ws connection")
  
    //Single User
    socket.emit("message","Welcome to Reflects")
    
    //Broadcast when a user connects expect the user
    socket.broadcast.emit("message","a new user login")

    //Run a User disconnect
    socket.on("disconnect",()=>{
        io.emit("message","a user disconnected")
    })

    socket.on("chatMgs",(mgs)=>{
   
         io.emit("message",mgs)
    })
})


const PORT=3000 || process.env.PORT

server.listen(PORT,()=>{console.log(`Server is running on ${PORT}`)})