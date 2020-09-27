const { twitterStream } = require('./handlerTwitter');

const {
  recordTwitterFeed,
  getTwitterFeed,
} = require('../utils/sockets');

const {
  STREAM_RATE,
  DEFAULT_ERROR_MESSAGE,
} = require('../constants');

function handleSockets(socket, io) {
  const connectionLimit = (message = DEFAULT_ERROR_MESSAGE) => {
    socket.emit('error-message', message);
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
