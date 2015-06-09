// var host = 'ws://node-api.foo.com:4000'
var host = "wss://undying-funereal-skull.admin.wellmatchhealth.com"
var socket = io.connect(host)
socket.on('news', function (data) {
  console.log(data);
  socket.emit('my other event', { my: 'data' });
});

// import {Socket} from "./phoenix.js"
// "use strict";
// var Socket = require('socket.io-client');
// var Socket = require('socket.io');

// var host = "https://undying-funereal-skull.admin.wellmatchhealth.com"
// var host = "ws://localhost:3000"
// var url = host + "/events"

// var socket = io(host);
// // var socket = require('socket.io-client')(host, {secure: true});
// var Socket = require('./phoenix.js')
// (function () {

  // let socket = new Socket(host)
  // var socket = Socket.io(host, {secure: true});
  // socket.connect()
  // socket.connect(host, {secure: true});

  // let chatInput = $("#chat-input")
  // let messagesContainer = $("#messages")

  // let chan = socket.chan("events:search:1234", {})

  // chatInput.on("keypress", event => {
  //   if(event.keyCode === 13) {
  //     chan.push("new_msg", {body: chatInput.val()})
  //     chatInput.val("")
  //   }
  // })

  // chan.on("new_msg", payload => {
  //   messagesContainer.append(`<br/>[${Date()}] ${payload.body}`)
  // })

  // chan.join().receive("ok", chan => {
  //   console.log("Welcome to Phoenix Chat!")
  // })
// })();
