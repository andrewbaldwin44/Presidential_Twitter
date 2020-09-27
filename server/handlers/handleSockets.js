const { twitterStream } = require('./handlerTwitter');

const {
  recordTwitterFeed,
  getTwitterFeed,
} = require('../utils/sockets');

const {
  STREAM_RATE,
  DEFAULT_ERROR_MESSAGE,
} = require('../constants');

let currentStreamRate = 0;

function delayStream() {
  if (currentStreamRate === 0) currentStreamRate = STREAM_RATE;
}

function handleSockets(socket, io) {
  const connectionLimit = (message = DEFAULT_ERROR_MESSAGE) => {
    socket.emit('error-message', message);
  }

  const sendSlowStream = () => {
    delayStream();

    const twitterFeed = getTwitterFeed();

    socket.emit('tweets', twitterFeed);
  }

  socket.on('request-feed', () => {
    twitterStream(recordTwitterFeed, connectionLimit);

    setInterval(sendSlowStream, currentStreamRate);
  });
}

module.exports = { handleSockets }
