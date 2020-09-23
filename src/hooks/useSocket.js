import { useEffect } from 'react';

import io from 'socket.io-client';
const socket = io.connect('http://localhost:4000');

function useSockets(roomID) {
  useEffect(() => {
    socket.emit('request-feed')

    socket.on('tweets', tweetFeed => {
      console.log(tweetFeed)
    });

    socket.on('limit', message => console.log(message));
  }, []);
}


export default useSockets;
