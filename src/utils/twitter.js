export function changeTwitterRules(user) {
  return fetch(`/twitter/set/${user}`);
}
