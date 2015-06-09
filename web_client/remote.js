/**
 * This file provided by Facebook is for non-commercial testing and evaluation purposes only.
 * Facebook reserves all rights not expressly granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 * ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

var app = require('express')();

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  next();
});

var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(4000);

io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});

// var fs = require('fs');
// var path = require('path');
// var express = require('express');
// var bodyParser = require('body-parser');
// var app = express();
// var server = require('http').Server(app);
// var io = require('socket.io')(server);

// // var socket = require('socket.io');

// app.set('port', (process.env.PORT || 3000));

// app.use('/', express.static(path.join(__dirname, 'public')));
// app.use('/build', express.static(path.join(__dirname, 'build')));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));

// // app.use(req, res, next, function() {
// //   // res.header("Access-Control-Allow-Origin", "*");
// //   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

// //   res.setHeader('Access-Control-Allow-Origin', 'https://quivering-kitten-9504.dev.wellmatchhealth.com');
// //   res.setHeader('Access-Control-Allow-Methods', 'GET');
// //   // res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
// //   res.setHeader('Access-Control-Allow-Credentials', true);
// //   next();
// // });

// // app.get('/socket.io', function(req, res){
// // });

// app.get('/events', function(req, res){
// });

// app.get('/comments.json', function(req, res) {
//   fs.readFile('comments.json', function(err, data) {
//     res.setHeader('Content-Type', 'application/json');
//     res.send(data);
//   });
// });

// app.post('/comments.json', function(req, res) {
//   fs.readFile('comments.json', function(err, data) {
//     var comments = JSON.parse(data);
//     comments.push(req.body);
//     fs.writeFile('comments.json', JSON.stringify(comments, null, 4), function(err) {
//       res.setHeader('Content-Type', 'application/json');
//       res.setHeader('Cache-Control', 'no-cache');
//       res.send(JSON.stringify(comments));
//     });
//   });
// });

// app.listen(app.get('port'), function() {
//   console.log('Server started: http://localhost:' + app.get('port') + '/');
// });

// server.listen(4001);

// io.sockets.on('connection', function (socket) {
//   // stream.on('tweet', function(tweet) {
//   //   socket.emit('info', { tweet: tweet});
//   // });
// });
