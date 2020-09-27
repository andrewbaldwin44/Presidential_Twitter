const {
  destroyStream,
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
    failureCallBack();
  }
}

async function setTwitterRules(req, res) {
  const { rule } = req.params;
  const twitterRule = TWITTER_RULES[rule];

  try {
    if (twitterRule) {
      destroyStream()

      const currentRules = await getAllRules();
      await deleteAllRules(currentRules);
      await setRules(twitterRule);

      const newRules = await getAllRules();

      res.status(200).json({ status: 200, rules: newRules });
    }
    else {
      throw new Error('Invalid rule');
    }
  }
  catch ({ message }) {
    res.status(400).json({ status: 400, message });
  }
}

module.exports = {
  twitterStream,
  setTwitterRules,
}
