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

  socket.on('chat', function (payload) {
    console.log(payload);
  });
});


app.get('/send', function (req, res) {
  io.emit('chat', { message: req.query.m });
  res.send("OK");
});

app.get('/socket.io', function (req, res) { res.send("OK"); });
