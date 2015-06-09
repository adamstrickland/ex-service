import {Socket} from "./phoenix.js"

// var Socket = require('./phoenix.js')
// (function () {
  // "use strict";

  let socket = new Socket("ws://localhost:4000/events")
  socket.connect()

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
  })

  chan.join().receive("ok", chan => {
    console.log("Welcome to Phoenix Chat!")
  })
// })();
