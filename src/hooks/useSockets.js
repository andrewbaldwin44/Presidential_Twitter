import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { sendTweetFeed, sendErrorMessage } from '../actions';

import io from 'socket.io-client';

let socket;

if (process.env.NODE_ENV === 'development') {
  socket = io.connect('http://localhost:4000');
} else {
  socket = io.connect('/');
}

export function requestFeed() {
  socket.emit('request-feed');
}

function useSockets() {
  const dispatch = useDispatch();

  useEffect(() => {
    requestFeed();

    socket.on('tweets', (tweetFeed) => {
      if (tweetFeed) dispatch(sendTweetFeed(tweetFeed));
    });

    socket.on('error-message', (message) => {
      dispatch(sendErrorMessage(message));
    });
  }, []);
}

export default useSockets;
