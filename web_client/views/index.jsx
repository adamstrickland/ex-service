var React = require('react')
var DefaultLayout = require('./layouts/default');
var ChatForm = React.createClass({
  render: () => {
    return (
      <DefaultLayout>
        <script>
          var host = {this.props.api_host};
          var socket = io.connect(host)
          socket.on('news', function (data) {
            console.log(data);
            socket.emit('my other event', { my: 'data' });
          });
        </script>
        <h4>Chat</h4>
        <div id="messages"></div>
        <input id="chat-input" type="text"></input>
      </DefaultLayout>
    );
  }
});

module.exports = ChatForm;

