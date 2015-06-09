var React = require('react')
var DefaultLayout = React.createClass({
  render: () => {
    return (
      <html>
        <head>
          <title>WS FTW!</title>
          <script src="//code.jquery.com/jquery-1.11.2.min.js"></script>
          <script src="//cdn.socket.io/socket.io-1.3.5.js"></script>
        </head>
        <body>{this.props.children}</body>
      </html>
    );
  }
});

module.exports = DefaultLayout;
