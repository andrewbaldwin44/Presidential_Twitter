const TWITTER_RULES = {
  home: [
    { 'value': 'trump' },
    { 'value': 'donald trump' },
    { 'value': 'clinton' },
    { 'value': 'hilarly clinton' },
  ],
  trump: [
    { 'value': 'trump' },
    { 'value': 'donald trump' },
  ],
  clinton: [
    { 'value': 'clinton' },
    { 'value': 'hilarly clinton' },
  ],
}

const STREAM_RATE = 5000;
const DEFAULT_ERROR_MESSAGE = 'An unexpected error has occured!';

module.exports = {
  TWITTER_RULES,
  STREAM_RATE,
  DEFAULT_ERROR_MESSAGE,
};
