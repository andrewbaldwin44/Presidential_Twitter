import React from 'react';
import { useParams } from 'react-router-dom';

function Feed() {
  const { user } = useParams();

  return (
    <>
      <span>{`${user}'s Feed`}</span>
    </>
  );
}

export default Feed;
