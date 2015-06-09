// use strict

// let socket = new Socket("/api/v1/searches/events")
let socket = new Socket("http://localhost:4000/events")
socket.connect()

// let chan = socket.chan("rooms:lobby", {})
// chan.join().receive("ok", chan => {
//   console.log("Welcome to Phoenix Chat!")
// })

let chatInput = $("#chat-input")
let messagesContainer = $("#messages")

let chan = socket.chan("events:search:1234", {})

chatInput.on("keypress", event => {
  if(event.keyCode === 13) {
    chan.push("new_msg", {body: chatInput.val()})
    chatInput.val("")
  }
})

chan.on("new_msg", payload => {
  messagesContainer.append(`<br/>[${Date()}] ${payload.body}`)
}

chan.join().receive("ok", chan => {
  console.log("Welcome to Phoenix Chat!")
}
