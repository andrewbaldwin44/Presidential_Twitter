import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { sendTweetFeed } from '../actions';

import io from 'socket.io-client';
const socket = io.connect('http://localhost:4000');

function useSockets() {
  const dispatch = useDispatch();

  useEffect(() => {
    socket.emit('request-feed')

    socket.on('tweets', ({ data: tweetFeed }) => {
      if (tweetFeed) dispatch(sendTweetFeed(tweetFeed));
    });

    socket.on('limit', message => console.log(message));
    // eslint-disable-next-line
  }, []);
}

export default useSockets;
