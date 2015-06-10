var host = 'ws://node-api.foo.com:4000'
// var host = "wss://undying-funereal-skull.admin.wellmatchhealth.com"
var socket = io.connect(host)

socket.on('news', function (data) {
  console.log(data);
  socket.emit('my other event', { my: 'data' });
});

socket.on('chat', (payload) => {
  console.log(payload);
  $('#messages').append(`<br/>[${Date()}] ${payload.message}`)
});

var chatInput = $('#chat-input');
chatInput.on('keypress', (e) => {
  if(e.keyCode === 13){
    socket.emit('chat', { message: chatInput.val() });
    chatInput.val('');
  }
});

/* THE PHOENIX IMPL */
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
