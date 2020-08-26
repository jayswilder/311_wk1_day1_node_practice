const split = (str, delim) => {
  // write code for strings.split
  return str.split(delim)
}

const pairs = (str) => {
  // write code for strings.pairs
  let groups = [];

  for (let i = 0; i < str.length; i += 2) {
    groups.push(str.slice(i, i + 2));
  }
  return groups
}

const reverse = (str) => {
  // write code for strings.reverse
  let strArr = str.split('')
  return strArr.reverse().join('')
}

module.exports = {
  split,
  pairs,
  reverse
}