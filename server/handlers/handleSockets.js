const { twitterStream } = require('./handlerTwitter');

function handleSockets(socket, io) {
  const sendTwitterFeed = feed => {
    socket.emit('tweets', feed);
  }

  const connectionLimit = () => {
    socket.emit('limit', 'The connection has reached the limit');
  }

  socket.on('request-feed', () => {
    twitterStream(sendTwitterFeed, connectionLimit);
  })
}

module.exports = { handleSockets }
