const needle = require('needle');

require('dotenv').config();

const TWITTER_BEARER = process.env.TWITTER_BEARER;

const streamURL = "https://api.twitter.com/2/tweets/search/stream?tweet.fields=context_annotations&expansions=author_id";
const rulesURL = "https://api.twitter.com/2/tweets/search/stream/rules";

let timeout = 0;
let stream;

function destroyStream() {
  if (stream) stream.destroy();
}

async function sleep(delay) {
  return new Promise((resolve) => setTimeout(() => resolve(true), delay));
}

async function getAllRules() {
  const response = await needle('get', rulesURL, { headers: {
    "authorization": `Bearer ${TWITTER_BEARER}`
  }})

  if (response.statusCode !== 200) {
    throw new Error(response.body);
    return null;
  }

  return (response.body);
}

async function deleteAllRules(rules) {
  if (!Array.isArray(rules.data)) {
    return null;
  }

  const ids = rules.data.map(rule => rule.id);

  const data = {
    "delete": {
      "ids": ids
    }
  }

  const response = await needle('post', rulesURL, data, {headers: {
    "content-type": "application/json",
    "authorization": `Bearer ${TWITTER_BEARER}`
  }})

  if (response.statusCode !== 200) {
    throw new Error(response.body);
    return null;
  }

  return (response.body);
}

async function setRules(rules) {
  const data = {
    "add": rules
  }

  const response = await needle('post', rulesURL, data, {headers: {
    "content-type": "application/json",
    "authorization": `Bearer ${TWITTER_BEARER}`
  }})

  if (response.statusCode !== 201) {
    throw new Error(response.body);
    return null;
  }

  return (response.body);
}

function connectStream(callBack, failureCallBack) {
  destroyStream();

  const options = {
    timeout: 1000
  }

  try {
    const stream = needle.get(streamURL, {
      headers: {
        Authorization: `Bearer ${TWITTER_BEARER}`
      }
    });

    stream.on('data', data => {
      console.log(data)
      try {
        const response = JSON.parse(data);

        callBack(response);
      } catch (e) {
        failureCallBack();
        reconnect(stream, callBack, failureCallBack);
      }
    });

    stream.on('error', error => {
      if (error.code === 'ETIMEDOUT') {
        failureCallBack();
        reconnect(stream, callBack, failureCallBack);
      }
    });
  }
  catch (error) {
    console.log(error)
  }
}

// Exponential back-off to avoid Twitter limits
const reconnect = async (stream, callBack, failureCallBack) => {
  timeout++;
  destroyStream();
  await sleep(2 ** timeout * 1000);
  connectStream(callBack, failureCallBack);
};

module.exports = {
  getAllRules,
  deleteAllRules,
  setRules,
  connectStream,
}
