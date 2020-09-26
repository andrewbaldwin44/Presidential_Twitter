function toArray(object) {
  return Object.values(object);
}

async function sleep(delay) {
  return new Promise((resolve) => setTimeout(() => resolve(true), delay));
}

module.exports = {
  toArray,
  sleep,
}
