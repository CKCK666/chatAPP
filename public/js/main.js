const chatForm =document.getElementById("chat-form")

const socket =io()

socket.on("message",(message)=>{
    outputMessage(message)
})

chatForm.addEventListener("submit",e=>{
    e.preventDefault()

const mgs=e.target.elements.msg.value

//emit to server
 socket.emit("chatMgs",mgs)
})

const outputMessage=(message)=>{
    let div=document.createElement("div")
    div.classList.add("message")
    div.innerHTML=`<p class="meta">Brad <span>9:12pm</span></p>
    <p class="text">
       ${message}
    </p>`
   document.querySelector(".chat-messages").appendChild(div)
}