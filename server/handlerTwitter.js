const needle = require('needle');

require('dotenv').config();

const TWITTER_BEARER = process.env.TWITTER_BEARER;

const streamURL = "https://api.twitter.com/2/tweets/search/stream?tweet.fields=context_annotations&expansions=author_id";
const rulesURL = "https://api.twitter.com/2/tweets/search/stream/rules";

const { TWITTER_RULES } = require('./constants');

let stream;

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
  if (stream) return;

  const options = {
    timeout: 15e50000000
  }

  stream = needle.get(streamURL, {
    headers: {
      Authorization: `Bearer ${TWITTER_BEARER}`
    }
  });

  stream.on('data', data => {
    try {
      const response = JSON.parse(data);

      callBack(response);
    } catch (e) {
      failureCallBack();
      return null;
    }
  });

  stream.on('error', error => {
    if (error.code === 'ETIMEDOUT') {
      stream.emit('timeout');
    }
  });
}

async function twitterStream(callBack, failureCallBack) {
  try {
    await connectStream(callBack, failureCallBack);
  }
  catch (error) {
    console.log(error);
  }
}

async function setTwitterRules(req, res) {
  const { rule } = req.params;
  const twitterRule = TWITTER_RULES[rule];

  if (twitterRule) {
    const currentRules = await getAllRules();
    await deleteAllRules(currentRules);
    await setRules(twitterRule);

    res.status(200).json({ status: 200 });
  }
  else {
    res.status(400).json({ status: 400, message: 'Invalid rule' });
  }
}

module.exports = {
  twitterStream,
  setTwitterRules,
}
