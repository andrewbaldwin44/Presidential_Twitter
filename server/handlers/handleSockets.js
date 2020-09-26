const { twitterStream } = require('./handlerTwitter');
const {
  recordTwitterFeed,
  getTwitterFeed,
} = require('../utils/sockets');

const STREAM_RATE = 5000;

function handleSockets(socket, io) {
  const connectionLimit = () => {
    socket.emit('limit', 'The connection has reached the limit');
  }

  socket.on('request-feed', () => {
    twitterStream(recordTwitterFeed, connectionLimit);

    setInterval(() => {
      const twitterFeed = getTwitterFeed();

      socket.emit('tweets', twitterFeed);
    }, STREAM_RATE);
  });
}

module.exports = { handleSockets }
