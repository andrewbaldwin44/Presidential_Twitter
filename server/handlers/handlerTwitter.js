const {
  getAllRules,
  deleteAllRules,
  setRules,
  connectStream
} = require('../utils/twitter');

const { TWITTER_RULES } = require('../constants');

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
