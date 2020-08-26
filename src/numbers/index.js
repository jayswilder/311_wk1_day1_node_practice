const isEven = (num) => {
  // write code for numbers.isEven
  if (num % 2 == 0) {
    return true
  } else {
    return false
  }
}
const testArr = [1, 2, 3, 4]

const sum = (arr) => {
  // write code for numbers.sum
  const mySum = (total, num) => {
    return total + num
  }
  return arr.reduce(mySum)
}

const comboSum = (arr, num) => {
  // write code for numbers.comboSum
  if (sum(arr) == num) {
    return true
  } else {
    return false
  }
}

module.exports = {
  isEven,
  sum,
  comboSum
}